import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductList from '../pages/ProductList';
import CustomTabBar from '../components/CustomTabBar';
import Landing from '../pages/Landing';
import Sales from '../pages/Sales';
import SalesList from '../pages/SalesList';   
import CustomerList from '../pages/CustomerList';
import ProductForm from '../pages/ProductForm';
import CustomerForm from '../pages/CustomerForm';
import SpendingList from '../pages/SpendingList';
import SpendingForm from '../pages/SpendingForm';
import Indicators from '../pages/Indicators';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />} >
        <Tab.Screen name="Landing" component={Landing} />
        <Tab.Screen name="ProductList" component={ProductList} />        
        <Tab.Screen name="CustomerList" component={CustomerList} />
        <Tab.Screen name="Sales" component={Sales} />
        <Tab.Screen name="SalesList" component={SalesList} />   
        <Tab.Screen name="SpendingList" component={SpendingList} />   
        <Tab.Screen name="Indicators" component={Indicators} />   

        <Tab.Screen name="ProductForm" component={ProductForm} />        
        <Tab.Screen name="CustomerForm" component={CustomerForm} />
        <Tab.Screen name="SpendingForm" component={SpendingForm} />
    </Tab.Navigator>
);