import React, {Component} from 'react'
import { Container, Header, Content, Text, Left, Body, Right, Button, Icon, Title, H2, View ,List, ListItem, Thumbnail } from 'native-base'
import {styles} from './Styles'
import {HistoryItem, UserHeader} from '../../components/index/'
import {ScrollView, Dimensions, Image} from 'react-native'
import {APIgetInfo, APIgetQRURI} from '../../communication/APIinteraction'
class ProfileHomePage extends Component{
    constructor(props){
        super(props);
        console.log('User Session: ' + global.sessionID);
        console.log('User Hash: ' + global.hash);

        this.state = {json: {Balance: 'Loading', Name: 'Loading', Transactions: []}, qrURI: null, historyCodes: null}
    }

    async componentDidMount(){
        console.log('Home Page Mounted');
        await this.fetchInfo();
    }

    async fetchInfo(){
        var json = await APIgetInfo(global.sessionID, global.hash);
        if(json == null){
            alert('Error loading user info, returning to login');
            this.props.navigation.navigate('LoginPage');
        } else {
            this.setState({json: json});
        }

        var uri = await APIgetQRURI(global.sessionID);
        if(uri == null){
            alert('Error retrieving QR code');
        } else {
            this.setState({qrURI: uri});
            //console.log(this.state.qrURI);
        }

        await this.fetchHistroyCodes();
    }

    async fetchHistroyCodes(){
        var codes = [];
        var uri;
        for(var i = 0; i < this.state.json.Transactions.length; i++){
            uri = await APIgetQRURI(this.state.json.Transactions[i].Id);
            codes.push({uri: uri});
        }

        this.setState({historyCodes: codes});
    }

    render(){
        var trasactionList = [];
        var transaction;
        for(var i = 0; i < this.state.json.Transactions.length; i++){
            transaction = this.state.json.Transactions[i];

            trasactionList.push(
                <HistoryItem src={this.state.historyCodes == null ? require('../../images/logo.png') : this.state.historyCodes[i]} key={i} name={transaction.Name} balance={transaction.Amount 
                    + ' ' + (transaction.Outbound ? 'Sent' : 'Received')}/>
            );
        }


        return(
            <Container>
                <UserHeader props={this.props} balance={this.state.json.Balance} userName={this.state.json.Name}/>
                <Content contentContainerStyle={styles.contentBorder} scrollEnabled={false}>
                    <View>

                    <Image style={styles.scan} source={{uri: this.state.qrURI}} key={this.state.qrURI}></Image>

                    <View style={styles.historyBlock}>
                        <Text style={styles.history}>History</Text>
                    </View>
                    </View>
                        <ScrollView>
                            {trasactionList}
                        </ScrollView>
                </Content>
            </Container>
        )
    }
}


export default ProfileHomePage 