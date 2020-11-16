import React from 'react';
import { TouchableOpacity, View } from 'react-native';
 
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';  

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    images: Array<{
      id: number;
      url: string;
    }>;
  }

    
interface Props {
    state: {
        index: number;
    },
    navigation: {
        navigate(e: string): any
      },
}

const CustomTabBar: React.FC<Props> = ( {state, navigation}) => {  
    const goTo = (screenName: string) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.tabArea}>
            <TouchableOpacity  onPress={()=>goTo('Landing')} style={styles.tabItem}>
                <MaterialIcons name="home" size={32} color="#fff" style={{opacity: state.index===0? 1 : 0.5}} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>goTo('ProductForm')}  style={styles.tabItem}>
                <MaterialIcons name="receipt" size={32} color="#fff" style={{opacity: state.index===0? 1 : 0.5}} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>goTo('Sales')}  style={styles.tabItemCenter}>
                <MaterialIcons name="shopping-cart" size={32} color="#4EADBE" style={{opacity: state.index===0? 1 : 0.5}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}  style={styles.tabItem}>
                <MaterialIcons name="favorite" size={32} color="#fff" style={{opacity: state.index===0? 1 : 0.5}}  />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goTo('ProductView')}  style={styles.tabItem}>
                <MaterialIcons name="build" size={32} color="#fff" style={{opacity: state.index===0? 1 : 0.5}} />
            </TouchableOpacity>
        </View>
    );
}

export default CustomTabBar;