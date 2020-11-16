import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
 
import IntroductionPage from '../pages/IntroductionPage'; 
import MainTab from './MainTab'; 

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
  return ( 
      <NavigationContainer>
        <Navigator  
          initialRouteName="IntroductionPage"
          screenOptions={{
              headerShown: false
          }}>
          <Screen name="IntroductionPage" component={IntroductionPage}/> 
          <Screen name="MainTab" component={MainTab}/>  
        </Navigator>
      </NavigationContainer> 
  )
}

export default AppStack