import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductForm from '../pages/ProductForm';
import CustomTabBar from '../components/CustomTabBar';
import Landing from '../pages/Landing';
import Sales from '../pages/Sales';
import ProductView from '../pages/ProductView';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />} >
        <Tab.Screen name="Landing" component={Landing} />
        <Tab.Screen name="ProductForm" component={ProductForm} />
        <Tab.Screen name="Sales" component={Sales} />
        <Tab.Screen name="ProductView" component={ProductView} />
    </Tab.Navigator>
);