import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native'; 
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';   

import styles from './styles';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';  
import api from '../../services/api'; 
import { Sale } from '../../components/SaleItem';
import DateFilter from '../../components/util/dateFilter';

export interface Product {
    id: number;
    name: string;
    price: number;
    qnt: number;
}
interface Customer {
    id: number;
    name: string;
    email: string;
    cpf: string;
    phone: string;
}
  

const Sales: React.FC = () => {
    const { params } = useRoute<RouteProp<{ Sales: Sale }, 'Sales'>>();
    const navigation = useNavigation();     

    const [product, setProduct] = useState(''); 
    const [products, setProducts] = useState<Product[]>([]); 
    const [productsSelected, setProductsSelected] = useState<Product[]>([]);
    const [total, setTotal] = useState('');  
    const [sale, setSale] = useState(''); 
    const [discount, setDiscount] = useState(''); 
    const [customers, setCustomers] = useState<Customer[]>([]); 
    const [customer, setCustomer] = useState('');  
    const [customerSelected, setCustomerSelected] = useState<Customer>({id:0 , name:'', email:'', cpf: '', phone: ''}); 
    const [registrationDate, setRegistrationDate] = useState('');  
    const [preventClick, setPreventClick] = useState(true);  
    const [showProductSelection, setShowProductSelection] = useState(true);
    const [showCustomerSelection, setShowCustomerSelection] = useState(true);
    const [id, setId] = useState(0);
    
    const [idsSaleItem, setIdsSaleItem] = useState<number[]>([]); 

    const handleBackButton = () => {
        navigation.goBack();
    }

    useEffect(()=> {
        let today = new Date();
        setRegistrationDate(today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear());
    }, [params]);

    useEffect(() => { 
        if(!!params){          
          setCustomer(params.customerName);
          setCustomerSelected({id:params.idCustomer , name:'', email:'', cpf: '', phone: ''}); 
          setId(params.idSale);
          {/**api.get<SaleItem[]>(`sale/saleItems/${params.idSale}`)
                 .then(response => { 
                     response.data.map(item => { 
                        setProductsSelected(p => [...p, {id: item.idProduct, name: item.productName, price: parseFloat(item.productPrice+''), qnt: parseFloat(item.amount+'')}]);
                        setIdsSaleItem(i => [...i, item.idSaleItem]);
                     })})*/}

          setTotal(String(params.total.toFixed(2)));
          setDiscount(params.discount ? params.discount.toFixed(2): ''); 
        }
      }, [params]);
 
    useEffect(() => {
        var sum = parseFloat(total).toFixed(2); 
        if(sum==='NaN') 
            setSale('R$0,00')        
        else{ 
            setSale('R$'.concat(sum));   
            var disc = parseFloat(discount).toFixed(2); 
            if(disc!=='NaN'){ 
                setSale('R$'.concat((parseFloat(total)-parseFloat(discount)).toFixed(2)))
            }    
        } 
        setTotal(sum);  
    }
    ,[total, discount]);
 

 

    const handleCountProduct = (prod: Product) => { 
        if(preventClick){
            setProductsSelected( product => { 
                const products = product.map((item) => {
                    if( prod.id === item.id){
                        let p = item;
                        p.qnt++; 
                        setTotal(String(parseFloat(total) + parseFloat(p.price + ""))); 
                        return p;
                    }else {
                        return item;
                    }                
                });
                return products;            
            })}
        setPreventClick(true);
    }
 
    const handleRemoveProduct = ( product: Product) => {  
        let value = (parseFloat(total) - (product.price * product.qnt));
        if(value < 0){
            value = 0.0; 
        }
        setTotal(value.toFixed(2)); 
        setProductsSelected(item => item.filter((_) =>  product.id !== _.id));
        setPreventClick(false);          
    } 

    async function findProduct(e: string){  
        setShowProductSelection(true);
        if(e.trim()===''){
            setProduct('');
            setProducts([]);
            return;
        }     
        setProduct(e); 
        if(e.length >1){
            await api.get('/product', {
                params : {
                  product: e
                }
            }).then(response => {             
                setProducts(response.data.content);  
            }).catch(error =>
                setProducts([])
            )
        }          
    }

    function handleProductSelected(item: Product){ 
        setShowProductSelection(false);
        const product = productsSelected.find(e=>{ return e.id === item.id}); 
        if(product){ 
            handleCountProduct(product)
        }else{ 
            item.qnt++;            
            setTotal(String((parseFloat(total) ? parseFloat(total) : 0.0) + item.price));
            setProductsSelected(p => [...p, item]);                     
        }
        setProduct('');           
    }

    async function handleFindCustomer(customer: string){
        setShowCustomerSelection(true);        
        if(customer.trim()===''){ 
            setCustomer('');
            return;
        }
        setCustomer(customer);
        await api.get('/customer', {
            params : {
              find: customer
            }
        }).then(response => {          
            setCustomers(response.data);  
        }).catch(error => {
            setCustomers([]); 
        })
    }

    function handleSelectedCustomer(item: Customer){
        setCustomer(item.name);
        setCustomerSelected(item);
        setShowCustomerSelection(false);
    }

    async function handleFinishSale(){
        var date = new Date; 
        const customer = customerSelected.id;
        let productsId: Array<number> = [];
        let productsAmount: Array<number> = [];
        let productsPrice: Array<number> = []; 
        productsSelected.map((item) => {
            productsId.push(item.id);
            productsAmount.push(item.qnt);
            productsPrice.push(item.price);
        }); 

        const rD = (registrationDate!==''? registrationDate + " "+ ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) : ''); 

        const sale = { registrationDate: rD, total, customer, discount, productsId, productsAmount, productsPrice, idsSaleItem}; 

        await api.post('/sale', sale).then(response => {  
            alert('Venda realizada!');   
            setTotal('');
            setDiscount('');
            setCustomer('');
            setProductsSelected([]);
            setSale('');
            setId(0);
            setIdsSaleItem([]);
            
          }).catch(error => {
            alert(error.response.data); 
          })     
    }


    function dateTimeInputChangeHandler(e: string){
        setRegistrationDate(DateFilter(e));
    }
  
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
           <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
            <View style={styles.scroller}>
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
                                    style={[styles.productItem, 
                                        key%2===0 ? 
                                            {backgroundColor: '#fac8e18a'} : 
                                            {backgroundColor: '#fce1efa1'}]} 
                                    key={key} 
                                    onPress={()=>handleProductSelected(item)}> 
                                    <View>
                                        <Text>{item.name}</Text>                                        
                                    </View>
                                </TouchableOpacity>
                            ))}     
                        </View>
                    </ScrollView>
                }

                {(productsSelected.length > 0) &&  
                    <ScrollView 
                        style={styles.switchContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true} >      
                            {productsSelected.map((item,key) => (
                                <TouchableOpacity key={key} style={styles.cardProductSelected} onPress={() => handleCountProduct(item)}>
                                        <View style={styles.countButton}> 
                                            <Text style={styles.textCountProduct}>{(item.qnt && item.qnt >=1)? item.qnt : null }</Text>                                         
                                        </View>
                                        <Text style={styles.productSelectedText}>{item.name}</Text>   
                                        <View style={styles.imageRemove}>
                                            <TouchableOpacity onPress={() => handleRemoveProduct(item)}>
                                                <AntDesign name="close" size={20} color="#A52A2A" style={{ backgroundColor: '#FFFFFF' }} />
                                            </TouchableOpacity>
                                        </View>                                     
                                </TouchableOpacity>  
                            ))} 
                    </ScrollView>  
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
                                keyboardType='number-pad'
                                placeholder="DD/MM/YYYY"
                                onChangeText={(e) => dateTimeInputChangeHandler(e)}
                                value={registrationDate}
                />
            
                <Text style={styles.label}>Valor total</Text> 
                <TextInput 
                    style={styles.input}
                    value={sale}  
                    editable={false}
                />                 
                
                <Text style={styles.label}>Desconto</Text>
                <TextInput
                    style={styles.input}
                    value={discount}
                    onChangeText={setDiscount}
                    keyboardType='number-pad'
                /> 

                <Text style={styles.label}>Nome ou ID do Cliente</Text>
                <TextInput
                    style={styles.input}
                    value={customer}
                    onChangeText={(e) => handleFindCustomer(e)}
                /> 

                {customers.length > 0 && showCustomerSelection && 
                    <View style={styles.scrollerProduct}>
                        <View style={styles.productItemSelect}>
                            {customers.map((item,key) => (
                                <TouchableOpacity 
                                    style={[styles.productItem, 
                                    key%2===0 ? 
                                        {backgroundColor: '#fac8e18a'} : 
                                        {backgroundColor: '#fce1efa1'}]}   
                                    key={key} 
                                    onPress={()=>handleSelectedCustomer(item)}> 
                                    <View style={{flex: 1}}>
                                        <Text>{item.name}</Text>                                        
                                    </View>
                                </TouchableOpacity>
                            ))}     
                        </View>
                    </View>
                }
 
                <TouchableOpacity style={styles.nextButton} onPress={() => handleFinishSale()}>
                    <Text style={styles.nextButtonText}>Finalizar Venda</Text>
                </TouchableOpacity>

            </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Sales;