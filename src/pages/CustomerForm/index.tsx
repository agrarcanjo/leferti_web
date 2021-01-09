import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'; 
import api from '../../services/api';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Customer } from '../../components/CustomerItem';

const CustomerForm: React.FC = () =>  {

  const { params } = useRoute<RouteProp<{ CustomerForm: Customer }, 'CustomerForm'>>();

  const navigation = useNavigation();

  const [name, setName] = useState('');  
  const [email, setEmail] = useState(''); 
  const [cpf, setCpf] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [id, setId] = useState(0); 

  useEffect(() => {
    if(!!params && params.id!==null){
      setName(params.name);
      setEmail(params.email);
      setCpf(params.cpf);
      setPhone(params.phone);
      setId(params.id);
    }
  }, [params])


  async function handleCreateCustomer(){ 
    
    const customer = {id, name, email, cpf, phone}
         
    await api.post('/customer', customer).then(response => {           
      alert('Cliente criado com sucesso com ID: ' + response.data.id);  
      setName('');  
      setCpf('');
      setPhone('');
      setEmail('');
      setId(0);
      navigation.navigate('CustomerList');
    }).catch(error => {
      alert(error.response.data);  
    })        
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroller} contentContainerStyle={{ padding: 24 }}>
        <Text style={styles.title}>Cadastrar Cliente</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)} // também pode utilizar apenas como {setName}
        />

        <Text style={styles.label}>CPF</Text>
        <TextInputMask
          type={'cpf'}
          style={styles.input}
          value={cpf}
          placeholder="000.000.000-00"
          onChangeText={setCpf}  
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) 99999-9999'
          }}
          style={styles.input}
          maxLength={15}
          value={phone}
          placeholder="(99) 99999-9999"
          onChangeText={text => 
            setPhone(text)
          }
          
        /> 
    
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />  

        <RectButton style={styles.nextButton} onPress={handleCreateCustomer}>
            <Text style={styles.nextButtonText}>{params.id ? 'Atualizar Cliente' : 'Cadastrar Cliente'}</Text>
        </RectButton> 
         

      </ScrollView>
    </SafeAreaView>
  )
}

export default CustomerForm;

