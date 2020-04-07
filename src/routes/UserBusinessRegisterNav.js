import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import { LoginPage, BusinessRegisterPage, UserRegisterPage } from '../screens/index'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';

const Tab = createMaterialTopTabNavigator();
export default function LoginRegistrationNav(){
        return(
                <Tab.Navigator tabBarPosition='bottom'       
                tabBarOptions={{
                    indicatorStyle: {backgroundColor: '#fff'},
                    labelStyle: { fontSize: 13,  },
                  }}>
                    <Tab.Screen name = "User" component = {UserRegisterPage} />
                    <Tab.Screen name = "Business" component = {BusinessRegisterPage} />
                </Tab.Navigator>
        )
}