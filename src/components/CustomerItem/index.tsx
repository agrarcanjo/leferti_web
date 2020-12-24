import { useNavigation } from '@react-navigation/native';
import React from 'react'; 
import { View, Text  } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
 
import styles from './styles';  

export interface Customer {
  id: number;
  name: string;  
  email: string;
  phone: string;
  cpf: string;
}
  
interface CustomerProps {
  customer: Customer 
}

const CustomerItem: React.FC<CustomerProps> = ({customer}) => {
  
  const { navigate } = useNavigation(); 

  function handleEditCustomer(){  
    navigate('CustomerForm', customer);       
  }
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleEditCustomer}>   
        <View style={styles.profileDonw}>           
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>Nome: </Text>
            <Text style={styles.value}>{customer.name}</Text> 
          </View>  
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>Id: </Text>
            <Text style={styles.value}>{customer.id}</Text> 
          </View>
        </View>  

        <View style={styles.profileDonw}> 
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>CPF: </Text>
            <Text style={styles.value}>{customer.cpf}</Text> 
          </View>  
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>Fone: </Text>
            <Text style={styles.value}>{customer.phone}</Text> 
          </View>   
        </View>

        <View style={styles.profileDonw}>  
          <View style={styles.firstRow}>
            <Text style={[styles.label]}>E-mail: </Text>
            <Text style={styles.value}>{customer.email}</Text> 
          </View>  
        </View>
    </TouchableOpacity>
  );
}

export default CustomerItem;