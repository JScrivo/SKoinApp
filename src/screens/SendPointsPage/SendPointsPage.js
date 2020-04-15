import React, {Component} from 'react'
import { Container, Content, Item, Input,Button, Icon, H2 } from 'native-base'
import {styles} from './Styles'
import {UserHeader, PromotionCard} from '../../components/index'

export default class SendPointsPage extends Component{
    render(){
        return(
            <Container>
                <UserHeader props={this.props}/>
                <Content style={styles.contentBorder}>
                <Item regular style={styles.amountInput}>
                        <Input autoCapitalize="none" placeholder="Amount of Points"/>
                </Item>
                <Item regular style={styles.amountInput}>
                        <Input autoCapitalize="none" placeholder="Security Question"/>
                </Item>
                <Item regular style={styles.amountInput}>
                        <Input autoCapitalize="none" placeholder="Answer"/>
                </Item>
                <Button style={styles.scan} bordered warning>
                        <Icon style={styles.scanIcon} type='MaterialCommunityIcons' name='coins'/>
                        <H2>Send</H2>
                </Button>
                </Content>
            </Container>
        )
    }
}