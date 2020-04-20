import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import { LoginPage, ProfileHomePage } from '../screens/index'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import React, { Component } from 'react';
import UserBusinessRegisterNav from './UserBusinessRegisterNav'
import UserPageNav from './UserPageNav'
import BuisnessPageNav from './BuisnessPageNav'
const Stack = createStackNavigator();
export default class LoginRegistrationNav extends Component{
    render(){
        function createMyStack(){

        }

        return(
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name = "LoginPage" component = {LoginPage} />
                    <Stack.Screen name = "UserRegister" children = {UserBusinessRegisterNav} />
                    {/* use UserPageNav if user logged with usual account and use BuisnessPageNav it is Buisness Account*/}
                    <Stack.Screen name = "HomePage" children = {BuisnessPageNav} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}