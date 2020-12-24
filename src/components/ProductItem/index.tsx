import { useNavigation } from '@react-navigation/native';
import React from 'react'; 
import { View, Text  } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
 
import styles from './styles';  

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string;
  cost: number;
  dateRegister: string[];
}
  
interface ProductProps {
  product: Product 
}

const ProductItem: React.FC<ProductProps> = ({product}) => {
  
  const { navigate } = useNavigation(); 

  function handleEditProduct(){  
    navigate('ProductForm', product);       
  }
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleEditProduct}>   
        <View style={styles.profileDonw}>           
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>Produto: </Text>
            <Text style={styles.value}>{product.name}</Text> 
          </View>          
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>Preço: </Text>
            <Text style={styles.value}>{product.price.toFixed(2)}</Text> 
          </View>            
        </View>  

        <View style={styles.profileDonw}> 
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>Descrição: </Text>
            <Text style={[styles.value]}>{product.description ? (product.description.length>15 ? (product.description.substr(0,15)+"...") : product.description )  : ''}</Text> 
          </View> 
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>Custo: </Text>
            <Text style={styles.value}>{product.cost.toFixed(2)}</Text> 
          </View>             
        </View>  

        <View style={styles.profileDonw}> 
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>Data de Registro: </Text>
            <Text style={styles.value}>{product.dateRegister ? product.dateRegister[2]+ "/" + product.dateRegister[1] + "/" + product.dateRegister[0] : ""}</Text> 
          </View> 
        </View> 
    </TouchableOpacity>
  );
}

export default ProductItem;