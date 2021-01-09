import React, { useState } from 'react';
import { ScrollView, TextInput, BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Picker} from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader'; 
import api from '../../services/api';  
import { useFocusEffect, useNavigation} from '@react-navigation/native'; 
import SpendingItem, { Spending } from '../../components/SpendingItem';

const SpendingList: React.FC = () => {   

  const navigation = useNavigation();

  const [spendings, setSpendings] = useState<Spending[]>([]);
  const [name, setName] = useState('') ; 
  const [description, setDescription] = useState('') ; 
  const [year, setYear] = useState('') ; 
  const [month, setMonth] = useState('') ; 

   
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
 
  function handleToggleFilterIsVisible(){
    setIsFiltersVisible(!isFiltersVisible)
  }

  useFocusEffect(
    React.useCallback(() => { 
      setIsFiltersVisible(true);
      setSpendings([]);
    }, [])
  );

  function handleAddSpending(){ 
    const p = { id: 0, name: '', description: '', price:0, amount: 0, dateRegister: ''} 
    navigation.navigate('SpendingForm', p)
  }

  async function handleFilterSubmit(){     
    await api.get('/spending', {
        params : {
          name,
          description,
          month,
          year
        }
    }).then(response => {             
        setSpendings(response.data);  
    }).catch(error => {
      alert("Não encontrado!");
      setSpendings([]);
    })
    
    setIsFiltersVisible(!isFiltersVisible)  
  }

  function FilterButton(){
    return (
      <BorderlessButton onPress={handleToggleFilterIsVisible} style={styles.filterButton}>
        <Feather name="filter" size={25} color="#FFFFFF"/>
      </BorderlessButton>
    )
  }

  return (
    <View style={styles.container}>
        <PageHeader title="Gastos" headerRight={<FilterButton/>}>
          {isFiltersVisible && (
            (
              <View style={styles.searchForm}>   
                <View style={styles.inputGroup}>  
                    <View style={styles.inputBlock}>             
                      <Text style={styles.label}>Gasto</Text>
                      <TextInput 
                        style={styles.input}  
                        value={name} 
                        onChangeText={setName}
                      />
                    </View> 
                    <View style={styles.inputBlock}>             
                      <Text style={styles.label}>Descrição</Text>
                      <TextInput 
                        style={styles.input}  
                        value={description} 
                        onChangeText={setDescription}
                      />
                    </View>                       
                  </View>  
                  <View style={styles.inputGroup}>                   
                    <View style={[styles.inputBlock, {alignItems: 'center'}]}>   
                      <Text style={styles.label}>Mês</Text>
                        <Picker
                          selectedValue={month}
                          onValueChange={setMonth}
                          style={styles.valueDown}
                          mode="dropdown"
                          itemStyle={styles.labelSelect}> 
                          <Picker.Item label="Selecione..." value="" />
                          <Picker.Item label="Janeiro" value="1" />
                          <Picker.Item label="Fevereiro" value="2" />
                          <Picker.Item label="Março" value="3" />
                          <Picker.Item label="Abril" value="4" />
                          <Picker.Item label="Maio" value="5" />
                          <Picker.Item label="Junho" value="6" />
                          <Picker.Item label="Julho" value="7" />
                          <Picker.Item label="Agosto" value="8" />
                          <Picker.Item label="Setembro" value="9" />
                          <Picker.Item label="Outubro" value="10" />
                          <Picker.Item label="Novembro" value="11" />
                          <Picker.Item label="Dezembro" value="12" />
                        </Picker>
                    </View> 
                    <View style={[{width: '30%'}]}>             
                        <Text style={styles.label}>Ano</Text>
                        <TextInput 
                          style={[styles.input]}  
                          value={year} 
                          onChangeText={setYear}
                          keyboardType='numeric'
                        />
                    </View>
                  </View>
                <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                  <Text style={styles.submitButtonText}>Buscar Gastos</Text>
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
          {spendings.map((spending: Spending) => (
            <SpendingItem 
              key={spending.id} 
              spending={spending} 
            />
          ))}
        </ScrollView>
        
        <View style={styles.plusButton}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleAddSpending}
            style={styles.touchableOpacityStyle}>
            <Feather name="plus" size={35} color="#FFFFFF"/>
          </TouchableOpacity>
        </View>
    </View>
  );
}

export default SpendingList;