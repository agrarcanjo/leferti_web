import React, { useState } from 'react';
import { ScrollView, TextInput, BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import ProductItem, { Product } from '../../components/ProductItem';
import api from '../../services/api';  
import { useFocusEffect, useNavigation } from '@react-navigation/native'; 
  
const ProductList: React.FC = () => { 
  const navigation = useNavigation();

  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState('') ; 
  const [description, setDescription] = useState('') ; 
  const [page, setPage] = useState(0) ; 
  const [totalPages, setTotalPages] = useState(0) ; 
   
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
 
  function handleToggleFilterIsVisible(){
    setIsFiltersVisible(!isFiltersVisible)
  }

  useFocusEffect(
    React.useCallback(() => { 
      setIsFiltersVisible(true);
      setProducts([]);
    }, [])
  );

  function handleAddProduct(){ 
    const p = { id: 0, name: '', description: '', price:0, cost: 0, dateRegisterString: ''} 
    navigation.navigate('ProductForm', p)
  }

  async function handleFilterSubmit(){    
    const size = 0; 
    await api.get('/product', {
        params : {
          product,
          description,
          page, 
        }
    }).then(response => {            
      setProducts(response.data.content); 
      setTotalPages(response.data.totalPages)  

    }).catch(error => {
      Alert.alert("Não encontrado!");
      setProducts([]);
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
        <PageHeader title="Produtos" headerRight={<FilterButton/>}>
          {isFiltersVisible && (
            (
              <View style={styles.searchForm}>   
                <View style={styles.inputGroup}>  
                    <View style={styles.inputBlock}>             
                      <Text style={styles.label}>Produto</Text>
                      <TextInput 
                        style={styles.input}  
                        value={product} 
                        onChangeText={setProduct}
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
                <TouchableOpacity style={styles.submitButton} onPress={handleFilterSubmit}>
                  <Text style={styles.submitButtonText}>Buscar Produtos</Text>
                </TouchableOpacity>
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
          {products.map((product: Product) => (
            <ProductItem 
              key={product.id} 
              product={product} 
            />
          ))}
        </ScrollView>
        <View style={styles.plusButton}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleAddProduct}
          style={styles.touchableOpacityStyle}>
          <Feather name="plus" size={35} color="#FFFFFF"/>
        </TouchableOpacity>
        </View>
    </View>
  );
}

export default ProductList;