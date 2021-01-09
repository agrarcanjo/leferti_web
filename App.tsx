import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
 
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
      <AuthProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
      </AuthProvider>
    )
  }
}
