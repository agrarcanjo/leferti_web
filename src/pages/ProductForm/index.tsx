import React, { useState } from 'react';
import { ScrollView, Text, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; 
import api from '../../services/api';

import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductForm() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState(''); 
  const [price, setPrice] = useState(''); 
  const [cost, setCost] = useState(''); 

  async function handleCreateProduct(){ 
    
    const product = {name, description, price, cost}
         
    await api.post('/product', product);

    navigation.navigate('Home');
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroller} contentContainerStyle={{ padding: 24 }}>
        <Text style={styles.title}>Produto</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)} // também pode utilizar apenas como {setName}
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, { height: 110 }]}
          multiline
          value={description}
          onChangeText={setDescription}
        />
    
        <Text style={styles.label}>Preço de compra</Text>
        <TextInput
          style={styles.input}
          value={cost}
          onChangeText={setCost}
        /> 

        <Text style={styles.label}>Preço de venda</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
        /> 

        <RectButton style={styles.nextButton} onPress={handleCreateProduct}>
          <Text style={styles.nextButtonText}>Cadastrar</Text>
        </RectButton>

      </ScrollView>
    </SafeAreaView>
  )
}

