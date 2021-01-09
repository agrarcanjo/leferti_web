import React, { useState, useEffect } from 'react';
import { TextInput, BorderlessButton, RectButton, Switch, FlatList } from 'react-native-gesture-handler';
import { View, Text, ActivityIndicator, PanResponder } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import SaleItem, { Sale } from '../../components/SaleItem';
import api from '../../services/api'; 
import { useFocusEffect } from '@react-navigation/native';
import DateFilter from '../../components/util/dateFilter';
import Loading from '../../components/util/loading';
import { SafeAreaView } from 'react-native-safe-area-context';

const SaleList: React.FC = () => { 
  const [customer, setCustomer] = useState('') ; 
  const [dateFilter, setDateFilter] = useState('') ; 
  const [dateFilterEnd, setDateFilterEnd] = useState('') ; 

  const [sales, setSales] = useState<Sale[]>([]);
  
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [isDebt, setIsDebt] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

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

  useEffect(() => {
    //handleFilterSubmit();
  },[]); 

  async function handleFilterSubmit(){  
    setLoadingButton(false);
    await api.get('/sale', {
      params : {
        customer,
        isDebt,
        dateFilter,
        dateFilterEnd,
        page
      }, 
    }).then(response => {        
      setSales(response.data); 
      setIsFiltersVisible(!isFiltersVisible); 
    }).catch(error => {
      alert("Não encontrado!");
      setSales([]);
      setPage(0);
      setTotalPages(0);
    })    
    setLoadingButton(true);
  }

  async function refreshList(){
    setRefreshing(true);
    setPage(0);
    await handleFilterSubmit();

    setRefreshing(false);
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

  function dateTimeEndInputChangeHandler(e : string ) {
    setDateFilterEnd(DateFilter(e));
  }

  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.container2}> 
        <View style={styles.header}>
          <Text style={styles.title}>Vendas Realizadas</Text>
          <View style={styles.headerRight}><FilterButton/></View>
        </View> 
        <View>
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
                        keyboardType='default'
                      />
                    </View>                                        
                </View>  
                <View style={styles.inputGroup}>  
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
                  <View style={styles.inputBlock}>             
                      <Text style={styles.label}>Até Data</Text>
                          <TextInput                                
                                  style={styles.input}
                                  maxLength={10}
                                  placeholder="DD/MM/YYYY"
                                  onChangeText={(e) => dateTimeEndInputChangeHandler(e)}
                                  value={dateFilterEnd}
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
                {loadingButton && 
                  <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                    <Text style={styles.submitButtonText}>Buscar Vendas</Text>
                  </RectButton>
                }
              </View>
              )
          )}
        </View> 
        </View> 
        <FlatList 
          data={sales}
          keyExtractor={sale => String(sale.idSale)}
          renderItem={({item}) => <SaleItem sale={item}/> }
        />         
    </SafeAreaView>
  );
}

export default SaleList;