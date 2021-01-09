import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
  
import Login from '../pages/Login' 
import IntroductionPage from '../pages/IntroductionPage'
import AboutPage from '../pages/AboutPage'
import ProductShowList from '../pages/ProductShowList'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='IntroductionPage' component={IntroductionPage} />
            <Screen name='AboutPage' component={AboutPage} />
            <Screen name='ProductShowList' component={ProductShowList} />
            <Screen name='Login' component={Login} />
        </Navigator>
    )
}

export default Routes
