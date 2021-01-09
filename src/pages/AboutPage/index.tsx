import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
 
import IntroductionHeader from '../../components/IntroductionHeader';
import FooterPage from '../../components/FooterPage';
import AvatarPerfil from '../../assets/images/about.png';
import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles' 

const AboutPage: React.FC = () => {

  const navigation = useNavigation()

  function handleNavigationToNextIntroduction(){
    navigation.navigate('Login');
  }
  
  return (
    <View style={styles.container}>
      <IntroductionHeader />

      <View style={styles.aboutContainer}>
        <Image source={AvatarPerfil} style={styles.image} />
        <View style={styles.aboutTextContainer}>
          <Text style={styles.introductionTextTitle}>Glória Menezes </Text>
          <Text style={styles.introductionText}>
                  Meu objetivo é levar um toque de beleza {"\n"} 
                a cada mulher. Realçando muito mais {"\n"} 
                do que sua beleza interna. {"\n"}
                - Há 20 anos sendo uma vacilona  {"\n"}
                Mas também um amorzinho..
          </Text> 
        </View>
      </View>

      <FooterPage />
    </View>
  );
}

export default AboutPage;