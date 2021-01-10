import { useNavigation } from '@react-navigation/native';
import React from 'react'; 
import { View, Text, Image  } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
 
import styles from './styles';  

export interface Product {
  id: number;
  name: string;
  price: number; 
  description: string; 
  uri: string;
  dateRegister: string[];
}
  
interface ProductProps {
  product: Product 
}

const ProductShowItem: React.FC<ProductProps> = ({product}) => {
  
  const { navigate } = useNavigation(); 
  
  return (
    <TouchableOpacity style={styles.container} >   

        <View style={styles.area}>
            <Image source={{uri: product.uri}} style={styles.image} />
            <View style={styles.infoArea}>
                <Text style={styles.value}>{product.name}</Text>
                <View style={styles.seeProfileButton}>  
                  <Text style={styles.label}>R$ {product.price.toFixed(2)}</Text>
                </View>
            </View>
        </View>
        
    </TouchableOpacity>
  );
}

export default ProductShowItem;