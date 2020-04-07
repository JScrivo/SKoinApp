import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import { LoginPage, ProfileHomePage } from '../screens/index'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import React, { Component } from 'react';
import UserBusinessRegisterNav from './UserBusinessRegisterNav'
import UserPageNav from './UserPageNav'
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
                    <Stack.Screen name = "HomePage" children = {UserPageNav} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}