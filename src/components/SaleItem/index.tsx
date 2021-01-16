import React, { useEffect, useState } from 'react';
import { RectButton, BorderlessButton, Switch, ScrollView } from 'react-native-gesture-handler';
import { View, Text, Linking, KeyboardAvoidingView, Platform} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
 
import styles from './styles'; 
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';

export interface Sale{
  idSale: number;
  total: number;
  idCustomer: number;
  customerName: string;  
  phone: string;
  discount: number;
  dateRegister: string; 
  debt: boolean;
}

export interface SaleItem {
  idSaleItem: number; 
  idProduct: number; 
  productPrice: number;
  amount: number;
  productName: string;
}

export interface SaleProps {
  sale: Sale 
}

const SaleItem: React.FC<SaleProps> = ({sale}) => { 

  const navigation = useNavigation();

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [saleItem, setSaleItem] = useState<SaleItem[]>([]); 
  const [isEnabledSwitch, setIsEnabledSwitch] = useState(sale.debt); 
 
  function handleToggleFilterIsVisible(){     
    setIsFiltersVisible(!isFiltersVisible)     
  }
   
  useEffect(() => {
    if(isFiltersVisible) {
      api.get(`sale/saleItems/${sale.idSale}`)
               .then(response => { 
      setSaleItem(response.data)
    })}
  }, [isFiltersVisible])

  function handleLinkToWhatsapp(){ 
    if(sale.phone){
      const formatPhone = "+55" + sale.phone.replace(/\D/g,"");  
      return Linking.openURL(`https://api.whatsapp.com/send?phone=${formatPhone}`)
    }else{
      alert("Cliente não possui telefone cadastrado")
    }
  }

  function handleToggleSwitchDebt(){   
      
    setIsEnabledSwitch(!isEnabledSwitch)   
    api.post('sale/debt', {
      id: sale.idSale,
      debt: !isEnabledSwitch,
    });        
  }
  
  function handleRemoveSale(){
    if(isFiltersVisible) { 
      api.delete(`sale/${sale.idSale}`).then(()=> {  
        navigation.navigate('Landing')
      }).catch(error => {
        alert(error.response.data);
      })
    }
  }

  function handleEditSale(){  
    navigation.navigate('Sales', sale);       
  }

 
  return (
  <ScrollView style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
      <View style={styles.profile}> 
        <View style={styles.profileDonw}> 
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{sale.customerName}</Text> 
          </View>

          <View style={styles.footer}>
            <Text style={styles.label}>
              Total {' '}
              <Text style={styles.priceValue}>R$ {(sale.total - sale.discount).toFixed(2)}</Text>
            </Text>
          </View>    
        </View>
        
        <BorderlessButton onPress={handleToggleFilterIsVisible} style={styles.buttonDown}>
          <MaterialCommunityIcons name="chevron-down" size={35} color="#000"/>
        </BorderlessButton>
      </View>
        

      {isFiltersVisible &&
          <View style={styles.containerHidden}>
            
            {sale.discount!=null &&
              <View style={styles.firstRow}>
                <View style={styles.switchButton}>
                  <Text style={[styles.label]}>Desconto: </Text>
                  <Text style={[styles.name]}>{(sale.discount).toFixed(2)}</Text>
                </View >
                <View style={styles.switchButton}>
                  <Text style={styles.label}>Data da Venda: </Text>
                  <Text style={styles.date}>{sale.dateRegister}</Text> 
                </View>
              </View>  
              
             }

            {saleItem.length>0 &&               
              <View style={styles.inputGroup}>
                <Text style={[styles.label, {width: '70%', marginLeft: 10}]}>Produto</Text>
                <Text style={[styles.label, {width: '10%'}]}>Qnt</Text>
                <Text style={[styles.label, {alignItems: 'flex-end', marginRight: 25}]}>Valor</Text>
              </View>
            }

            {saleItem.length>0 && saleItem.map((item, key) => (      
              <View style={[styles.inputGroup, key%2===0 ? {backgroundColor: '#ffe7f3a6'} : {}]} key={key}>                
                <Text style={[styles.name, {width: '70%', marginLeft: 10}]}>{item.productName}</Text>                   
                <Text style={[styles.name, {width: '10%', marginLeft: -15}]}>{item.amount}</Text>                  
                <Text style={[styles.name, {alignItems: 'flex-end', marginLeft: -10 ,marginRight: 25}]}>{item.productPrice}</Text>  
              </View>
            ))}
            <View style={styles.subContainer}> 
              <View style={styles.switchButton}>
                <RectButton onPress={handleRemoveSale} style={styles.removeButton}>
                  <MaterialCommunityIcons name="close-box-outline" size={20} color="#A52A2A"/>
                </RectButton> 
                <Text style={styles.label}>Excluir</Text>
              </View>
              
              <View style={styles.switchButton}>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabledSwitch ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={handleToggleSwitchDebt}
                  value={isEnabledSwitch}
                />     
                <Text style={[styles.label, {marginLeft: 8, marginRight: 8}]}>Fiado</Text>           
              </View>
              
            </View>
            {sale.phone !== '' &&
              <View style={styles.buttonsContainer}> 
                <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
                  <MaterialCommunityIcons name="whatsapp" size={20} color="#FFFFFF"/>
                  <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
              </View>
            }
          </View>
        }
        
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default SaleItem;