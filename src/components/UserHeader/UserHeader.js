import React, {Component} from 'react'
import {Header, Left, Button, Icon, Right, Text, Body, Title} from 'native-base'
import {styles} from './Styles'

export default class UserHeader extends Component{
    constructor(props){
        super(props)
        this.pressHandler = this.pressHandler.bind(this);
    }

    pressHandler(){
        this.props.props.navigation.openDrawer();
    }

    render(){
        return(
            <Header style={styles.header}>
            <Left>
                <Button transparent onPress={this.pressHandler}>
                    <Icon ios='ios-menu' android="md-menu" style={styles.font} />
                </Button>
            </Left>
            <Body>
                <Title style={styles.font}>UserName</Title>
            </Body>
            <Right style={styles.right}>
                <Button style={{marginLeft: 10}} warning transparent>
                <Text style={styles.balance}></Text>
                <Text>150</Text>
                <Icon type='MaterialCommunityIcons' name='coins'/>
                </Button>
            </Right>
            </Header>
        )
    }
}