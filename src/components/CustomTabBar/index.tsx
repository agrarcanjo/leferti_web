import React from 'react';
import { TouchableOpacity, View } from 'react-native';
 
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';  
  
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
                <MaterialIcons name="home" size={32} color="#fff" style={{opacity: state.index===0 ? 1 : 0.5}} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>goTo('ProductList')}  style={styles.tabItem}>
                <MaterialIcons name="receipt" size={32} color="#fff" style={{opacity: state.index===1 ? 1 : 0.5}} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>goTo('CustomerList')}  style={styles.tabItem}>
                <MaterialIcons name="person" size={32} color="#fff" style={{opacity: state.index===2 ? 1 : 0.5}} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>goTo('Sales')}  style={styles.tabItemCenter}>
                <MaterialIcons name="shopping-cart" size={32} color="#4EADBE" style={{opacity: state.index===3 ? 1 : 0.5}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goTo('SalesList')}  style={styles.tabItem}>
                <MaterialIcons name="find-in-page" size={32} color="#fff" style={{opacity: state.index===4 ? 1 : 0.5}}  />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goTo('SpendingList')}  style={styles.tabItem}>
                <MaterialIcons name="attach-money" size={32} color="#fff" style={{opacity: state.index===5 ? 1 : 0.5}} />
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>goTo('Indicators')}  style={styles.tabItem}>
                <MaterialIcons name="bookmark-border" size={32} color="#fff" style={{opacity: state.index===6 ? 1 : 0.5}} />
            </TouchableOpacity>
        </View>
    );
}

export default CustomTabBar;