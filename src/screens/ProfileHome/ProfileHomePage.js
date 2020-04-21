import React, {Component} from 'react'
import { Container, Header, Content, Text, Left, Body, Right, Button, Icon, Title, H2, View ,List, ListItem, Thumbnail } from 'native-base'
import {styles} from './Styles'
import {HistoryItem, UserHeader} from '../../components/index/'
import {ScrollView, Dimensions, Image} from 'react-native'
import {APIgetInfo, APIgetQRURI} from '../../communication/APIinteraction'
import {withNavigation} from 'react-navigation'
class ProfileHomePage extends Component{
    constructor(props){
        super(props);
        console.log('User Session: ' + global.sessionID);
        console.log('User Hash: ' + global.hash);

        this.state = {userInfo: {Balance: 'Loading', Name: 'Loading', Transactions: []}, qrURI: null, historyCodes: null}
    }

    async componentDidMount(){
        const { navigation } = this.props;
        //console.log('Home Page Mounted');
        //await this.fetchInfo();
        this.focusListener = navigation.addListener("focus", async () => {
            await this.fetchInfo();
            await this.fetchHistroyCodes();
        });
    }

    componentWillUnmount() {
        // Remove the event listener
        this.focusListener.remove();
    }

    async fetchInfo(){
        var json = await APIgetInfo(global.sessionID, global.hash);
        if(json == null){
            alert('Error loading user info, returning to login');
            this.props.navigation.navigate('LoginPage');
        } else {
            this.setState({userInfo: json});
        }

        var uri = await APIgetQRURI(global.sessionID);
        if(uri == null){
            alert('Error retrieving QR code');
        } else {
            this.setState({qrURI: uri});
            //console.log(this.state.qrURI);
        }
    }

    async fetchHistroyCodes(){
        if (this.state.Transactions != []){
            var codes = [];
            var uri = await APIgetQRURI(this.state.userInfo.Transactions[0].Id);
            codes.push({uri: uri});
            for(var i = 1; i < this.state.userInfo.Transactions.length; i++){
                if(this.state.userInfo.Transactions[i].Id != this.state.userInfo.Transactions[i-1].Id){
                    uri = await APIgetQRURI(this.state.userInfo.Transactions[i].Id);
                    console.log("Pretty leg: ", uri);
                }
                codes.push({uri: uri});
            }

            this.setState({historyCodes: codes});
        }
    }

    render(){
        var trasactionList = [];
        var transaction;
        for(var i = 0; i < this.state.userInfo.Transactions.length; i++){
            transaction = this.state.userInfo.Transactions[i];

            trasactionList.push(
                <HistoryItem src={this.state.historyCodes == null ? require('../../images/logo.png') : this.state.historyCodes[i]} key={i} name={transaction.Name} balance={transaction.Amount 
                    + ' ' + (transaction.Outbound ? 'Sent' : 'Received')}/>
            );
        }


        return(
            <Container>
                <UserHeader props={this.props} balance={this.state.userInfo.Balance} userName={this.state.userInfo.Name}/>
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


export default withNavigation(ProfileHomePage) 