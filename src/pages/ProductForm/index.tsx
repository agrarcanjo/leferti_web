import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'; 
import { TextInputMask } from 'react-native-masked-text';

import api from '../../services/api';

import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Product } from '../../components/ProductItem';
import PageHeader from '../../components/PageHeader';

const ProductForm: React.FC = () => {
  const { params } = useRoute<RouteProp<{ ProductForm: Product }, 'ProductForm'>>();

  const navigation = useNavigation();
 
  const [name, setName] = useState(params.name);
  const [description, setDescription] = useState(params.description); 
  const [price, setPrice] = useState(params.price.toFixed(2)); 
  const [cost, setCost] = useState(params.cost.toFixed(2)); 
  const [id, setId] = useState(params.id); 
  const [dateRegisterString, setRegistrationDateString] = useState(params.dateRegister); 
 
  useEffect(() => {
    if(!!params && params.id!==null){
      setName(params.name);
      setPrice(params.price.toFixed(2));
      setCost(params.cost.toFixed(2));
      setDescription(params.description);
      setId(params.id);
    }
  }, [params])

  async function handleCreateProduct(){ 
    
    let valueCost = cost.replace(/R./, ""); 
    valueCost = valueCost.replace(".", "");
    valueCost = valueCost.replace(",", ".");
    let valuePrice = price.replace(/R./, ""); 
    valuePrice = valuePrice.replace(".", "");
    valuePrice = valuePrice.replace(",", "."); 
    
    const product = {id, name, description, price: valuePrice, cost: valueCost, dateRegisterString} 

    await api.post('/product', product).then(response => {   
      Alert.alert('Relizado com sucesso, ID: ' + response.data.id);  
      setName('');
      setDescription('');
      setPrice('');
      setCost(''); 
      setId(0);
      navigation.navigate('ProductList');
    }).catch(error => {
      Alert.alert(error.response.data);  
    })        
  }  
 

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Cadastrar Produto">
      </PageHeader>
      <ScrollView style={styles.scroller} contentContainerStyle={{ padding: 24 }}> 

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
                    value={cost}  
                    onChangeText={setCost}
        />

        <Text style={styles.label}>Preço de venda</Text>
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
 
        <RectButton style={styles.nextButton} onPress={handleCreateProduct}>
          <Text style={styles.nextButtonText}>{params.id ? 'Atualizar Produto' : 'Cadastrar Produto'}</Text>
        </RectButton> 
         
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductForm;
