import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import { ProfileHomePage, PromotionsPage, SendPointsPage } from '../screens/index'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';

const Drawer = createDrawerNavigator();
export default function UserPageNav(){
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={ProfileHomePage} />
            <Drawer.Screen name="Promotions" component={PromotionsPage} />
            <Drawer.Screen name="Send Points" component={SendPointsPage} />
        </Drawer.Navigator>
    )
}
