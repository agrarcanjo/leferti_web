import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, FlatList, BorderlessButton, ScrollView} from 'react-native-gesture-handler';
import { View, Text} from 'react-native'; 

import styles from './styles' 
import ProductShowItem, { Product } from '../../components/ProductIShowItem';
import api from '../../services/api';   
import IntroductionHeader from '../../components/IntroductionHeader';
import { Feather } from '@expo/vector-icons'
import Loading from '../../components/util/loading';
import { proc } from 'react-native-reanimated';
import ProductItem from '../../components/ProductItem';
  
const ProductShowList: React.FC = () => {  

  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState('') ;  
  const [page, setPage] = useState(0) ; 
  const [totalPages, setTotalPages] = useState(0) ; 
   
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
 
  function handleToggleFilterIsVisible(){
    setIsFiltersVisible(!isFiltersVisible)
  }

  useEffect(()=> {  
      setIsFiltersVisible(true); 
      handleFilterSubmit();
    }, []);
 
  async function handleFilterSubmit(product = '', pageNumber = page, shouldRefresh = false) {   
    
    if(totalPages && pageNumber > totalPages) return;
     
    setLoading(true);  

    await api.get('/product', {
        params : {
          product, 
          page, 
        }
    }).then(response => {    
      const pageNow = pageNumber + 1 ;
      const totalPage = Number(response.data.totalPages) - 1;

      setProducts(shouldRefresh ? response.data.content : [...products, ...response.data.content]); 
      setTotalPages(totalPage);             
      setPage(pageNow);

    }).catch(error => { 
      setProducts([]);
    })   
    setLoading(false);    
  }

  async function refreshList(){
    setRefreshing(true);
    setTotalPages(0);

    await handleFilterSubmit('',0, true);

    setRefreshing(false);
  }

  function handleOnChangeText(text: string){
    setProduct(text);
      if(text && text.length>2){
        setTotalPages(0); 
        handleFilterSubmit(text, 0, true);
      }else{
        setProducts([]);
      }
  }
  
  return (
    <View style={styles.container}>
      <IntroductionHeader />  
      <View style={styles.searchForm}>   
          <View style={styles.inputGroup}>  
              <View style={styles.inputBlock}>              
              <TextInput 
                  style={styles.input}  
                    value={product} 
                    onChangeText={handleOnChangeText}
                  />
              </View>        
          </View>   
      </View> 
      <View style={{flex:1, paddingVertical: 10, paddingHorizontal: 30 }}>    
      <ScrollView 
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom:16,
          }}
        style={styles.saleList}>
          {products.map((product: Product) => (
            <ProductShowItem 
              key={product.id} 
              product={product} 
            />
          ))}
      </ScrollView>
          
          { /* <FlatList 
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({item}) => <ProductShowItem product={item} />}
            onEndReached={() => handleFilterSubmit() }
            onEndReachedThreshold={0.2} 
            onRefresh={refreshList}
            refreshing={refreshing}
            
          />  */}
      </View>
    </View>
  );
}

export default ProductShowList;