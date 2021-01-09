import React, { useState } from 'react';
import { ScrollView, TextInput, BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader'; 
import api from '../../services/api';  
import { useNavigation } from '@react-navigation/native'; 
import CustomerItem, { Customer } from '../../components/CustomerItem'; 


const CustomerList: React.FC = () => { 
  const navigation = useNavigation();

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [customer, setCustomer] = useState('') ; 
  const [loading, setLoading] = useState(true) ; 
   
   
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
 
  function handleToggleFilterIsVisible(){
    setIsFiltersVisible(!isFiltersVisible)
  }

  /*useFocusEffect(
    React.useCallback(() => { 
      setIsFiltersVisible(true);
      setCustomers([]);
    }, [])
  );*/

  function handleAddCustomer(){ 
    const p = { id: 0, name: '', email: '', cpf: '', phone: ''} 
    navigation.navigate('CustomerForm', p)
  }

  async function handleFilterSubmit(){  
    setLoading(false);    
      await api.get('/customer', {
          params : {
            find: customer
          }
      }).then(response => {            
        setCustomers(response.data);  
      }).catch(error => {
        setCustomers([]);
        alert("Não encontrado!");
      })
    
    setLoading(true);
    setIsFiltersVisible(!isFiltersVisible)  
  }

  function handleChangeText(text: string){
    setCustomer(text);
  }

  function FilterButton(){
    return (
      <BorderlessButton onPress={handleToggleFilterIsVisible} style={styles.filterButton}>
        <Feather name="filter" size={25} color="#FFFFFF"/>
      </BorderlessButton>
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
        <PageHeader title="Clientes" headerRight={<FilterButton/>}>

          {isFiltersVisible && (
            (
              <View style={styles.searchForm}>   
                <View style={styles.inputGroup}>  
                    <View style={styles.inputBlock}>             
                      <Text style={styles.label}>Cliente</Text>
                      <TextInput 
                        style={styles.input}  
                        value={customer} 
                        onChangeText={text => handleChangeText(text)}
                      />
                    </View>  
                  </View>  
                <RectButton style={styles.submitButton} onPress={handleFilterSubmit}  enabled={loading} >
                  <Text style={styles.submitButtonText}>Buscar Cliente</Text>
                </RectButton> 
              </View>
              )
          )}
        </PageHeader>
        <ScrollView 
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom:16,
        }}
        style={styles.saleList}>
          {customers.map((customer: Customer) => (
            <CustomerItem 
              key={customer.id} 
              customer={customer} 
            />
          ))}
        </ScrollView>
        <View style={styles.plusButton}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleAddCustomer}
            style={styles.touchableOpacityStyle}>
            <Feather name="plus" size={35} color="#FFFFFF"/>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default CustomerList;