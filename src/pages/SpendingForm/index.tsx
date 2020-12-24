import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'; 
import { TextInputMask } from 'react-native-masked-text';

import api from '../../services/api';

import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'; 
import PageHeader from '../../components/PageHeader';
import DateFilter from '../../components/util/dateFilter';
import { Spending } from '../../components/SpendingItem';

const SpendingForm: React.FC = () => {
  const { params } = useRoute<RouteProp<{ SpendingForm: Spending }, 'SpendingForm'>>();

  const navigation = useNavigation();

  useEffect(()=> {
    let today = new Date();
    setDateRegister(today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear());
  }, []);
 
  const [name, setName] = useState(params.name);
  const [description, setDescription] = useState(params.description); 
  const [price, setPrice] = useState(params.price ? params.price.toFixed(2) : '');  
  const [id, setId] = useState(params.id); 
  const [dateRegister, setDateRegister ] = useState(params.dateRegister ? params.dateRegister.toString() : '' ); 
  const [amount, setAmount ] = useState(params.amount? params.amount.toString() : ''); 

  async function handleCreateSpending(){ 
     
    let valuePrice = price.replace(/R./, ""); 
    valuePrice = valuePrice.replace(".", "");
    valuePrice = valuePrice.replace(",", "."); 

    const spending = {id, name, description, price: valuePrice, dateRegister, amount} 

    await api.post('/spending', spending).then(response => {   
      Alert.alert('Relizado com sucesso, ID: ' + response.data.id);  
      setName('');
      setDescription('');
      setAmount('');
      setDateRegister('');
      setPrice(''); 
      setId(0);
      navigation.navigate('SpendingList');
    }).catch(error => {
      Alert.alert(error.response.data);  
    })        
  }  

  function dateTimeInputChangeHandler(e: string){
    setDateRegister(DateFilter(e));
}

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Cadastrar Gasto">
      </PageHeader>
      <ScrollView style={styles.scroller} contentContainerStyle={{ padding: 24 }}> 

        <Text style={styles.label}>Gasto</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}  
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, { height: 110 }]}
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}  
        />

        <Text style={styles.label}>Valor do Gasto</Text>
        <TextInputMask
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: 'R$',
                        suffixUnit: ''
                    }}
                    style={styles.input}
                    value={price}  
                    onChangeText={setPrice}
        />

        <Text style={styles.label}>Data</Text>
          <TextInput                                
            style={styles.input}
            maxLength={10}
            placeholder="DD/MM/YYYY"
            onChangeText={(e) => dateTimeInputChangeHandler(e)}
            value={dateRegister}
        />

        <RectButton style={styles.nextButton} onPress={handleCreateSpending}>
            <Text style={styles.nextButtonText}>{params.id ? 'Atualizar Gasto' : 'Cadastrar Gasto'}</Text>
        </RectButton> 

      </ScrollView>
    </SafeAreaView>
  )
}

export default SpendingForm;
