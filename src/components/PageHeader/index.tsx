import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import styles from './styles'
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

interface PageHeaderProps {
  title: string,
  headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {

  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}> 
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <MaterialIcons name="chevron-left" size={24} color="#FFFFFF" />
        </BorderlessButton> 
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.headerRight}>{headerRight}</View>
      </View>  
      <View style={styles.body}>
        {children}
      </View>    
    </View>
  );
}

export default PageHeader;