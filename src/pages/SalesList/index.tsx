import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput, BorderlessButton, RectButton, Switch } from 'react-native-gesture-handler';
import { View, Text, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import SaleItem, { Sale } from '../../components/SaleItem';
import api from '../../services/api'; 
import { useFocusEffect } from '@react-navigation/native';
import DateFilter from '../../components/util/dateFilter';

const SaleList: React.FC = () => { 
  const [customer, setCustomer] = useState('') ; 
  const [dateFilter, setDateFilter] = useState('') ; 

  const [sales, setSales] = useState<Sale[]>([]);
  
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [isDebt, setIsDebt] = useState(false);

  function handleToggleFilterIsVisible(){
    setIsFiltersVisible(!isFiltersVisible)
  }
  
  function handleToggleSwitchDebt(){
    setIsDebt(!isDebt)
  }

  useFocusEffect(
    React.useCallback(() => { 
      setIsFiltersVisible(true);
      setSales([]);
    }, [])
  );

  async function handleFilterSubmit(){ 
    await api.get('/sale', {
      params : {
        customer,
        isDebt,
        dateFilter 
      }
    }).then(response => {        
      setSales(response.data); 
      setIsFiltersVisible(!isFiltersVisible) 
    }).catch(error => {
      Alert.alert("Não encontrado!");
      setSales([]);
    })    
  }

  function FilterButton(){
    return (
      <BorderlessButton onPress={handleToggleFilterIsVisible} style={styles.filterButton}>
        <Feather name="filter" size={25} color="#FFFFFF"/>
      </BorderlessButton>
    )
  }

  function dateTimeInputChangeHandler(e : string ) {
    setDateFilter(DateFilter(e));
  }

  return (
    <View style={styles.container}>
        <PageHeader title="Vendas Realizadas" headerRight={<FilterButton/>}>
          {isFiltersVisible && (
            (
              <View style={styles.searchForm}>   
                <View style={styles.inputGroup}>  
                    <View style={styles.inputBlock}>             
                      <Text style={styles.label}>Nome do Cliente</Text>
                      <TextInput 
                        style={styles.input}  
                        value={customer} 
                        onChangeText={setCustomer}
                      />
                    </View> 
                    <View style={styles.inputBlock}>             
                      <Text style={styles.label}>Data da Compra</Text>
                          <TextInput                                
                                  style={styles.input}
                                  maxLength={10}
                                  placeholder="DD/MM/YYYY"
                                  onChangeText={(e) => dateTimeInputChangeHandler(e)}
                                  value={dateFilter}
                                  keyboardType='number-pad'
                            />
                    </View>
                     
                </View>  
                <View style={styles.switchButton}>
                    <Switch
                      trackColor={{ false: '#767577', true: '#81b0ff' }}
                      thumbColor={isDebt ? '#f5dd4b' : '#f4f3f4'}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={handleToggleSwitchDebt}
                      value={isDebt}
                    />     
                    <Text style={[styles.label, {marginLeft: 8, marginRight: 8}]}>Fiado</Text>           
                </View>
                <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                  <Text style={styles.submitButtonText}>Buscar Vendas</Text>
                </RectButton>
              </View>
              )
          )}
        </PageHeader>
        <ScrollView 
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingBottom:16,
        }}
        style={styles.saleList}>
          {sales.map((sale: Sale) => (
            <SaleItem 
              key={sale.idSale} 
              sale={sale} 
            />
          ))}
        </ScrollView>
    </View>
  );
}

export default SaleList;