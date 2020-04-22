import React, {Component} from 'react'
import { Container, Content, Item, Input,Button, Icon, H2 } from 'native-base'
import {styles} from './Styles'
import {UserHeader, PromotionCard} from '../../components/index'
import {APIgetInfo, APIsendPoints} from '../../communication/APIinteraction'
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
  } from 'react-native';
import { RNCamera as Camera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {withNavigation} from 'react-navigation'

class SendPointsPage extends Component{
    

    constructor(props){
        super(props);
        console.log('User Session: ' + global.sessionID);
        //console.log('User Hash: ' + global.hash);

        this.state = {userInfo: {Balance: 'Loading', Name: 'Loading'}, scannerEnabled: false}
    }

    async componentDidMount(){
        const { navigation } = this.props;

        this.focusListener = navigation.addListener("focus", async () => {
            await this.fetchInfo();
        });
    }

    async fetchInfo(){
        var json = await APIgetInfo(global.sessionID, global.hash);
        if(json == null){
            alert('Error loading user info, returning to login');
            this.props.navigation.navigate('LoginPage');
        } else {
            this.setState({userInfo: json});
        }
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    onSuccess = e => {
        this.setState({scannerEnabled: false});
        this.sendPoints(e.data, this.state.amount);
      };

    async sendPoints(recipient, amount){
        if(await APIsendPoints(recipient, parseInt(amount), global.sessionID, global.hash)){
            alert('Points sent successfully');
            await this.fetchInfo();
        } else {
            alert('Unable to send points, try again');
        }
    }

    onSend = () => {
        if (this.state.amount == null){
            alert('Enter a valid amount');
        } else{
            this.setState({scannerEnabled: true});
        }
    }


    render(){
        var qrScanner = <QRCodeScanner onRead={this.onSuccess} flashMode={Camera.Constants.FlashMode.torch}/>;

        return(
            <Container>
                <UserHeader props={this.props} balance={this.state.userInfo.Balance} userName={this.state.userInfo.Name}/>
                <Content style={styles.contentBorder}>
                {this.state.scannerEnabled ? qrScanner : null}
                <Item regular style={styles.amountInput}>
                        <Input autoCapitalize="none" placeholder="Amount of Points" keyboardType="numeric"
                        onChangeText = {val => this.setState({amount: val})}/>
                </Item>
                <Button style={styles.scan} bordered warning onPress={this.onSend}>
                        <Icon style={styles.scanIcon} type='MaterialCommunityIcons' name='coins'/>
                        <H2>Send</H2>
                </Button>
                
                </Content>
            </Container>
        )
    }
}

export default withNavigation(SendPointsPage)