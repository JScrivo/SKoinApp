import React, {Component} from 'react'
import { Container, Content, Item, Input,Button, Icon, H2 } from 'native-base'
import {styles} from './Styles'
import {UserHeader, PromotionCard} from '../../components/index'
import {APIgetInfo} from '../../communication/APIinteraction'
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class SendPointsPage extends Component{
    constructor(props){
        super(props);
        console.log('User Session: ' + global.sessionID);
        console.log('User Hash: ' + global.hash);

        this.state = {userInfo: {Balance: 'Loading', Name: 'Loading'}}
    }

    async componentDidMount(){
        var json = await APIgetInfo(global.sessionID, global.hash);
        if(json == null){
            alert('Error loading user info, returning to login');
            this.props.navigation.navigate('LoginPage');
        } else {
            this.setState({userInfo: json});
        }
    }




    render(){
        return(
            <Container>
                <UserHeader props={this.props} balance={this.state.userInfo.Balance} userName={this.state.userInfo.Name}/>
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