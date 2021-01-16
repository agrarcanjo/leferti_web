import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'

import styles from './styles'; 
import { useAuth } from '../../contexts/auth';
 
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png' 
import { Feather } from '@expo/vector-icons'; 

const Landing: React.FC = () => { 

  const {signOut} = useAuth();

  const navigation = useNavigation();

  function handleNavigationToCustomer(){
    const p = { id: 0, name: '', email: '', cpf: '', phone: ''} 
    navigation.navigate('CustomerForm', p)
  }

  function handleNavigationToSale(){
    const p = { idCustomer: 0, customerName: '', idSale: 0, dateRegister: '', total: 0, discount: 0} 
    navigation.navigate('Sales', p)
  } 
  function handleNavigationToSpending(){
    const p = { id: 0, name: '', description: '', dateRegister: '', price: 0, amount: 0} 
    navigation.navigate('SpendingForm',p)
  }

  function handleNavigationToProduct(){
    const p = { id: 0, name: '', description: '', price:0, cost: 0, dateRegister: ''} 
    navigation.navigate('ProductForm', p)
  }

  const handleLogout = () => {
    signOut();
    navigation.navigate('IntroductionPage');    
}

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerIcon}>Leferti</Text>
      </View>
    
      <View style={styles.landingContent}>
        <Text style={styles.title}>
          Seja bem vindo, 
          <Text style={styles.titleBold}>  O que deseja fazer ?</Text>
        </Text>

        <View style={styles.buttonsContainer}>  

          <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigationToProduct}>
            <Image source={studyIcon}/>
            <Text style={styles.buttonText}>Cadastrar Produto</Text>
          </RectButton>

          <RectButton style={[styles.button, styles.buttonSecondary]}  onPress={handleNavigationToCustomer}
            >
            <Image source={giveClassesIcon} />
            <Text style={styles.buttonText}>Cadastrar Cliente</Text>
          </RectButton>
        </View> 

        <View style={styles.buttonsContainer}>  
        <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigationToSpending}>
          <Image source={studyIcon}/>
          <Text style={styles.buttonText}>Cadastrar Gastos</Text>
        </RectButton>

        <RectButton style={[styles.button, styles.buttonSecondary]}  onPress={handleNavigationToSale}
          >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>VENDER</Text>
        </RectButton>
        </View>

         <View style={styles.plusButton}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleLogout}
            style={styles.touchableOpacityStyle}>
            <Feather name="log-out" size={35} color="#FFFFFF"/>
          </TouchableOpacity>
        </View> 

      
      </View>

    </View>
  );
}

export default Landing;