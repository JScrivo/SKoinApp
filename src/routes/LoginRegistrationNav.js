import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import { LoginPage, ProfileHomePage } from '../screens/index'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import React, { Component } from 'react';
import UserBusinessRegisterNav from './UserBusinessRegisterNav'
import UserPageNav from './UserPageNav'
import BuisnessPageNav from './BuisnessPageNav'
import {pass} from '../communication/APIinteraction'
const Stack = createStackNavigator();
export default class LoginRegistrationNav extends Component{

    constructor(props){
        super(props)
    }

    render(){
        function createMyStack(){

        }

        return(
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name = "LoginPage" component = {LoginPage} />
                    <Stack.Screen name = "UserRegister" children = {UserBusinessRegisterNav} />
                    {/* use UserPageNav if user logged with usual account and use BuisnessPageNav it is Buisness Account*/}
                    <Stack.Screen name = "BusiHomePage" children = {BuisnessPageNav} />
                    <Stack.Screen name = "UserHomePage" children = {UserPageNav} />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}