import React from 'react'

import { createStackNavigator } from '@react-navigation/stack' 

import MainTab from './MainTab'; 

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    return ( 
        <Navigator  screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>
            <Screen name="MainTab" component={MainTab}/> 
        </Navigator> 
    )
}

export default Routes
