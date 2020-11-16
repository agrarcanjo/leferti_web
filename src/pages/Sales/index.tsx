import React, { useState } from 'react';
import { InteractionManager, Text, TouchableOpacity, View } from 'react-native'; 
import {useNavigation, useRoute} from '@react-navigation/native';  

import styles from './styles' 
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';  
import api from '../../services/api'; 

interface Product {
    id: number;
    name: string;
    price: number;
    qnt: number;
}
  

const Sales: React.FC = () => {
    const navigation = useNavigation();
    
    const route = useRoute();

    const [countProduct, SetCountProduct] = useState(''); 
    const [product, setProduct] = useState(''); 
    const [products, setProducts] = useState<Product[]>([]);
    const [productsSelected, setProductsSelected] = useState<Product[]>([]);
    const [sale, setSale] = useState(''); 
    const [customer, setCustomer] = useState(''); 
    const [registrationDate, setRegistrationDate] = useState('');  
    const [userInfo, setUserInfo] = useState({
        //id: route.params.id, ,
    });
    const [showModal, setShowModal] = useState(false);
    const [showProductSelection, setShowProductSelection] = useState(true);

    const handleBackButton = () => {
        navigation.goBack();
    }
 

    const checkValue = (str: string, max: number) => {
        if (str.charAt(0) !== '0' || str == '00') {
          var num = parseInt(str);
          if (isNaN(num) || num <= 0 || num > max) num = 1;
          str =
            num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
              ? '0' + num
              : num.toString();
        }
        return str;
      }

    function dateTimeInputChangeHandler(e : string ) {
        var input = e;
        var expr = new RegExp(/\D\/$/);
        if (expr.test(input)) input = input.substr(0, input.length - 3);
        var values = input.split('/').map(function (v) {
          return v.replace(/\D/g, '');
        });
        if (values[1]) values[1] = checkValue(values[1], 12);
        if (values[0]) values[0] = checkValue(values[0], 31);
        var output = values.map(function (v, i) {
          return v.length == 2 && i < 2 ? v + '/' : v;
        });
        var out = output.join('').substr(0, 14); 
        setRegistrationDate(out);
      };

      /*
    const modalContent = () => (
        <Modal>
            <View style={styles.modalArea}>
                    <View style={styles.modalBody}>

                        <TouchableOpacity onPress={() => { setShowModal(false) }} style={styles.closeButton}> 
                            <MaterialIcons name="expand-more" size={40} color="#000000" />
                        </TouchableOpacity>                    

                        <Text style={styles.label}>Nome ou ID do Produto</Text>
                        <TextInput
                            style={styles.input}
                            value={product}
                            onChangeText={text => setProduct(text)}  
                        /> 
                         
                        <TouchableOpacity onPress={() => { setShowModal(false) }} style={styles.finishButton}>
                            <Text  style={styles.finishButtonText}>Finalizar</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </Modal>
      );
      */
    const handleCountProduct = (index: number) => { 
        setProductsSelected( product => { 
            const products = product.map((item, i) => {
                if( index === i){
                    var p = item;
                    p.qnt++
                    return p;
                }else {
                  return item;
                }                
            });
            return products;            
        })     
    }
    
    const handleRemoveProduct = (index: number) => {
        var remove=-1; 
        
        setProductsSelected( product => { 
            const products = product.map((item, i) => {
                if( index === i){
                    var p = item;
                    if(p.qnt===0){
                        remove = index;                        
                    }else{ 
                        let minus = p.qnt;
                        p.qnt = minus - 1;
                        console.log(p.qnt)
                        return p;
                    }                    
                    return p;
                }else {
                  return item;
                }                
            });
            return products;            
        });
        
        if(remove!==-1){ 
            removeProduct(remove); 
        }
            
     
    }

    const removeProduct = ( index: number) => {
        setProductsSelected(item => item.filter((_, i) => i !== index));        
    }

    const handleRemove = ( index: number) => {
        console.log(productsSelected)
        console.log(index)
        const products = productsSelected.splice(index, 1);
        setProductsSelected(products);        
    }

    async function findProduct(e: string){  
        setShowProductSelection(true);
        setProduct(e);
        if(e===''.trim()){
            setProducts([]);
            return;
        }
        await api.get('/product', {
            params : {
              find: e
            }
        }).then(response => {             
            setProducts(response.data);  
        })
    }

    function handleProductSelected(item: Product){
        setShowProductSelection(false);
        item.qnt++;
        if(productsSelected.find(e=>item)){
            console.log('encontrou');
        }

        setSale(sale => sale + item.price);
        setProductsSelected(product => [...product, item]);        
        setProduct('');   
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroller} contentContainerStyle={{ padding: 24 }}>
                <Text style={styles.title}>Venda</Text>

                <Text style={styles.label}>Nome ou ID do Produto</Text>
                <TextInput
                    style={styles.input}
                    value={product}
                    onChangeText={(e) => findProduct(e)}  
                />

                {products.length > 0 && showProductSelection && 
                    <ScrollView style={styles.scrollerProduct}>
                        <View style={styles.productItemSelect}>
                            {products.map((item,key) => (
                                <TouchableOpacity 
                                    style={styles.productItem} 
                                    key={key} 
                                    onPress={()=>handleProductSelected(item)}> 
                                    <View style={{flex: 1}}>
                                        <Text>{item.name}</Text>                                        
                                    </View>
                                </TouchableOpacity>
                            ))}     
                        </View>
                    </ScrollView>
                }

                {(productsSelected.length > 0) &&
                    <View style={styles.switchContainer}>      
                            {productsSelected.map((item,key) => (
                                <TouchableOpacity key={key} style={styles.cardProductSelected} onPress={() => handleCountProduct(key)}>
                                        <View style={styles.countButton}>
                                            <RectButton style={styles.countButtonStyle}>
                                                    <Text style={styles.textCountProduct}>{(item.qnt && item.qnt >=1)? item.qnt : null }</Text>
                                            </RectButton>
                                        </View>
                                        <Text style={styles.productSelectedText}>{item.name}</Text>

                                        <View style={styles.imageRemove}>
                                            <RectButton onPress={() => handleRemove(key)}>
                                                <AntDesign name="close" size={20} color="#A52A2A" style={{ backgroundColor: '#FFFFFF' }} />
                                            </RectButton>
                                        </View>
                                </TouchableOpacity>                        
                            ))} 
                    </View>  
                }

                <Text style={styles.label}>Data</Text>
                        <TextInput
                                
                                style={{
                                    textAlign: 'center',
                                    width: 300,
                                    backgroundColor: 'white',
                                    padding: 10,
                                    marginBottom: 30,
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    paddingHorizontal: 30,
                                }}
                                maxLength={10}
                                placeholder="DD/MM/YYYY"
                                onChangeText={(e) => dateTimeInputChangeHandler(e)}
                                value={registrationDate}
                />
            
                <Text style={styles.label}>Preço de compra</Text> 
                <TextInput
                    style={styles.input}
                    value={sale}
                    onChangeText={setCustomer}
                /> 

                <Text style={styles.label}>Cliente</Text>
                <TextInput
                    style={styles.input}
                    value={customer}
                    onChangeText={setCustomer}
                /> 
 
                <TouchableOpacity style={styles.nextButton} onPress={() => {}}>
                    <Text style={styles.nextButtonText}>Finalizar Venda</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Sales;