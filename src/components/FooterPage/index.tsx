import React from 'react';
import { View, Text, Linking} from 'react-native'; 
 
import styles from './styles'  
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
 
const FooterPage: React.FC = () => {
  const  navigation = useNavigation();
  
  const handleGoToHome = () => {
    navigation.navigate('IntroductionPage');
  }

  const handleToContact = () => {
    return Linking.openURL(`https://api.whatsapp.com/send?phone=5516993748891`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.whats}>
       <View style={styles.plusWhatsapp}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleToContact}
            style={styles.touchableOpacityStyle}>
            <MaterialCommunityIcons name="whatsapp" size={55} color="#FFFFFF"/>
          </TouchableOpacity>          
        </View>  
        <Text style={styles.contato}>Clique aqui para entre em contato!</Text>
      </View>
        
    </View>
  );
}

export default FooterPage;