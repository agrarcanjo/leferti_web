import React from 'react';
import { View, Text, Image } from 'react-native'; 
 
import styles from './styles'
import giveClassesBackground from '../../assets/images/Background.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; 
 
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

  return (
    <View style={styles.header}>
        <Image style={styles.headerBackground} source={giveClassesBackground}/>
        <TouchableOpacity style={styles.headerIcon} onPress={handleGoToHome}>
          <Text style={styles.texIcon}>Leferti</Text>
          <Text style={styles.texIcon2}>Makes</Text>
        </TouchableOpacity>
        

        <View style={styles.menubar}>
            <TouchableOpacity onPress={handleGoToProducts}>
              <Text style={styles.texIconMenu}>Sobre</Text> 
            </TouchableOpacity> 
            <TouchableOpacity onPress={handleGoToAbout}>
              <Text style={styles.texIconMenu}>Sobre</Text> 
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default IntroductionHeader;