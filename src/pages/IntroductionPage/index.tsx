import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import studyIcon from '../../assets/images/icons/study.png'
import giveClassesBackground from '../../assets/images/Background.png'
import firstPageIcon from '../../assets/images/icons/page1.png' 
import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Introduction: React.FC = () => {

  const navigation = useNavigation()

  function handleNavigationToNextIntroduction(){
    navigation.navigate('MainTab')
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerIcon}source={studyIcon}/>
        <Image style={styles.headerBackground}source={giveClassesBackground}/>
      </View>

      <View style={styles.introductionTextContainer}>
        <Text style={styles.introductionNumber}>01.</Text>
        <Text style={styles.introductionText}>
          Realize a gestão {"\n"}
          da sua empresa {"\n"}
          de forma fácil e ágil
        </Text>

        <View style={styles.introductionFooter}>
          <Image source={firstPageIcon}/>
          <TouchableOpacity onPress={handleNavigationToNextIntroduction}>
            <AntDesign name="right" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Introduction;