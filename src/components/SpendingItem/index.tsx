import { useNavigation } from '@react-navigation/native';
import React from 'react'; 
import { View, Text, Alert  } from 'react-native'; 
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import styles from './styles';  
import api from '../../services/api';

export interface Spending {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string; 
  dateRegister: string[];
}
  
interface SpendingProps {
  spending: Spending 
}

const SpendingItem: React.FC<SpendingProps> = ({spending}) => {
  
  const { navigate } = useNavigation(); 
  
  function handleRemoveSpending(){ 
      api.delete(`spending/${spending.id}`).then(()=> {  
        navigate('Landing');
      }).catch(error => {
        Alert.alert(error.response.data);
      }) 
  }

  return (
    <View style={styles.container}>

        <View style={styles.switchButton}>
          <RectButton onPress={handleRemoveSpending} style={styles.removeButton}>
            <MaterialCommunityIcons name="close-box-outline" size={20} color="#A52A2A"/>
          </RectButton> 
        <Text style={styles.label}>Excluir</Text>
        </View>
        <View style={styles.inputBlock}>
          <View style={styles.profileDonw}>           
            <View style={styles.firstRow}>
              <Text style={[styles.label]}>Gasto: </Text>
              <Text style={styles.value}>{spending.name}</Text> 
            </View> 
            
            <View style={styles.firstRow}>
              <Text style={[styles.label]}>Descrição: </Text>
              <Text style={styles.value}>{spending.description}</Text> 
            </View> 
            
          </View>  

          <View style={styles.profileDonw}>    
            <View style={styles.firstRow}>
                <Text style={[styles.label]}>Qnt: </Text>
                <Text style={styles.value}>{spending.amount}</Text> 
            </View>     

            <View style={styles.firstRow}>
              <Text style={[styles.label]}>Preço: </Text>
              <Text style={styles.value}>R$ {spending.price}</Text> 
            </View>  
          </View>  

          <View style={styles.profileDonw}>  
            <View style={styles.firstRow}>
              <Text style={[styles.label]}>Data de Registro: </Text>
              <Text style={styles.value}>{spending.dateRegister ? spending.dateRegister[2]+ "/" + spending.dateRegister[1] + "/" + spending.dateRegister[0] : "" }</Text> 
            </View>   
          </View>   
        </View>
    </View>
  );
}

export default SpendingItem;