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
          Entre em contato {"\n"}
          e escolha seu {"\n"}
          Produto !
        </Text>

        <View style={styles.introductionFooter}>
          <Image source={firstPageIcon}/>
          <TouchableOpacity onPress={handleNavigationToNextIntroduction}>
            <AntDesign name="right" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <FooterPage />
    </View>
  );
}

export default Introduction;