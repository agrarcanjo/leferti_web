import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
 
import IntroductionHeader from '../../components/IntroductionHeader';
import FooterPage from '../../components/FooterPage';
import firstPageIcon from '../../assets/images/icons/page1.png';
import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Introduction: React.FC = () => {

  const navigation = useNavigation()

  function handleNavigationToNextIntroduction(){
    navigation.navigate('Login');
  }
  
  return (
    <View style={styles.container}>
      <IntroductionHeader />

      <View style={styles.introductionTextContainer}>
        <Text style={styles.introductionText}>
          Para realizar sua compra {"\n"}
          entre em contato  {"\n"}
          conosco via Whatsapp  {"\n"}
        </Text>
      </View>

      <FooterPage />
    </View>
  );
}

export default Introduction;