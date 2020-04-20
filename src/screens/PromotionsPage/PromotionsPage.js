import React, {Component} from 'react'
import { Container, Content } from 'native-base'
import {styles} from './Styles'
import {UserHeader, PromotionCard} from '../../components/index'
import {APIgetInfo} from '../../communication/APIinteraction'

export default class PromotionsPage extends Component{
    constructor(props){
        super(props);
        console.log('User Session: ' + global.sessionID);
        console.log('User Hash: ' + global.hash);

        this.state = {json: {Balance: 'Loading', Name: 'Loading'}}
    }

    async componentDidMount(){
        var json = await APIgetInfo(global.sessionID, global.hash);
        if(json == null){
            alert('Error loading user info, returning to login');
            this.props.navigation.navigate('LoginPage');
        } else {
            this.setState({json: json});
        }
    }

    render(){
        return(
            <Container>
                <UserHeader props={this.props} balance={this.state.json.Balance} userName={this.state.json.Name}/>
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