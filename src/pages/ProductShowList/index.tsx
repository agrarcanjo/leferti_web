import React, { useState } from 'react';
import { ScrollView, TextInput, BorderlessButton, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { View, Text} from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import ProductItem, { Product } from '../../components/ProductItem';
import api from '../../services/api';  
import { useFocusEffect } from '@react-navigation/native'; 
import IntroductionHeader from '../../components/IntroductionHeader';
  
const ProductShowList: React.FC = () => {  

  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState('') ; 
  const [description, setDescription] = useState('') ; 
  const [page, setPage] = useState(0) ; 
  const [totalPages, setTotalPages] = useState(0) ; 
   
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [loading, setLoading] = useState(true);
 
  function handleToggleFilterIsVisible(){
    setIsFiltersVisible(!isFiltersVisible)
  }

  useFocusEffect(
    React.useCallback(() => { 
      setIsFiltersVisible(true);
      setProducts([]);
    }, [])
  );
 
  const handleFilterSubmit = async () => {   
    setLoading(false); 
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
      alert("Não encontrado!");
      setProducts([]);
    })   
    setLoading(true);    
  }
 
  return (
    <View style={styles.container}>
      <IntroductionHeader />
        <PageHeader title="Produtos" >
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
                  </View>  
                {loading && 
                  <TouchableOpacity style={styles.submitButton} onPress={handleFilterSubmit}>
                    <Text style={styles.submitButtonText}>Buscar Produtos</Text>
                  </TouchableOpacity>
                }
              </View>
              )
          )}
        </PageHeader>
        <FlatList 
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item}) => <ProductItem product={item} />}
        />  
    </View>
  );
}

export default ProductShowList;