import React, {Component} from 'react'
import { Container, List, ListItem, Left, Thumbnail, Body, Text, Right, Button, View } from 'native-base'
import {TouchableOpacity} from 'react-native' 



export default  HistoryItem = (props) => {

        return(
            <ListItem thumbnail button={true} onPress={props.onPress}>
              <Left>
                <Thumbnail square source={props.src} />
              </Left>
              <Body>
                <Text>{props.name}</Text>
                <Text note numberOfLines={1}>{props.balance}</Text>
              </Body>
            </ListItem>
        )
}