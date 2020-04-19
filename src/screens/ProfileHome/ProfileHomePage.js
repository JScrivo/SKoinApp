import React, {Component} from 'react'
import { Container, Header, Content, Text, Left, Body, Right, Button, Icon, Title, H2, View ,List, ListItem, Thumbnail } from 'native-base'
import {styles} from './Styles'
import {HistoryItem, UserHeader} from '../../components/index/'
import {ScrollView, Dimensions} from 'react-native'
class ProfileHomePage extends Component{
    constructor(props){
        super(props);

        console.log('User Session: ' + global.sessionID);
    }
    
    render(){
        return(
            <Container>
                <UserHeader props={this.props}/>
                <Content contentContainerStyle={styles.contentBorder} scrollEnabled={false}>
                    <View>
                    <Button style={styles.scan} large dark transparent>
                        <Icon style={styles.scanIcon} name='md-qr-scanner'/>
                        <H2>Scan</H2>
                    </Button>
                    <View style={styles.historyBlock}>
                        <Text style={styles.history}>History</Text>
                    </View>
                    </View>
                        <ScrollView>
                            <HistoryItem src={require('../../images/logo.png')} name='hello' balance='120'/>
                        </ScrollView>
                </Content>
            </Container>
        )
    }
}


export default ProfileHomePage 