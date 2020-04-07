import React, {Component} from 'react'
import { Container, Content } from 'native-base'
import {styles} from './Styles'
import {UserHeader, PromotionCard} from '../../components/index'

export default class PromotionsPage extends Component{
    render(){
        return(
            <Container>
                <UserHeader props={this.props}/>
                <Content>
                    <PromotionCard 
                    companyName='Nigga' 
                    uri={require('../../images/logo.png')} 
                    promotionImage={require('../../images/logo.png')} 
                    note='12$'
                    description='Hello Hello Hello Hello'
                    likesNum={12}
                    duration={11}/>
                </Content>
            </Container>
        )
    }
}