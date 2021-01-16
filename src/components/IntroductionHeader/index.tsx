import React from 'react';
import { View, Text, Image } from 'react-native'; 
 
import styles from './styles'
import giveClassesBackground from '../../assets/images/Background.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; 
import { Feather } from '@expo/vector-icons'; 
 
const IntroductionHeader: React.FC = () => {
  const  navigation = useNavigation();
  
  const handleGoToHome = () => {
    navigation.navigate('IntroductionPage');
  }

  const handleGoToAbout = () => {
    navigation.navigate('AboutPage');
  }
  
  const handleGoToProducts = () => {
    navigation.navigate('ProductShowList');
  }

  function handleNavigationToNextIntroduction(){
    navigation.navigate('Login');
  }

  return (
    <View style={styles.header}>
      <Image style={styles.headerBackground} source={giveClassesBackground}/>
      <View style={styles.iconLoginTop}>
          <TouchableOpacity 
            onPress={handleNavigationToNextIntroduction}
            activeOpacity={0.7}
            style={styles.iconLogin}>
            <Feather name="log-in" size={20} color="#FFFFFF"/>
          </TouchableOpacity>
      </View> 
      <View style={styles.logo}>
          <TouchableOpacity style={styles.headerIcon} onPress={handleGoToHome}>
            <Text style={styles.texIcon}>Leferti</Text>
            <Text style={styles.texIcon2}>Makes</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.menubar}>
        <TouchableOpacity onPress={handleGoToProducts}>
          <Text style={styles.texIconMenu}>Produtos</Text> 
        </TouchableOpacity> 
        <TouchableOpacity onPress={handleGoToAbout}>
              <Text style={[styles.texIconMenu, {marginLeft: 10}]}>Sobre</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default IntroductionHeader;