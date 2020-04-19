import { BuisnessHomePage, BuisnessAddPromotion } from '../screens/index'
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';

const Stack = createStackNavigator();
export default function BuisnessPageNav(){

        return(
                <Stack.Navigator>
                    <Stack.Screen name = "BuisnessHomePage" component = {BuisnessHomePage} />
                    <Stack.Screen name = "BuisnessAddPromotion" component = {BuisnessAddPromotion} />
                </Stack.Navigator>
        )
    }