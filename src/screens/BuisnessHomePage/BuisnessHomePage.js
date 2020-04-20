import React, {Component} from 'react'
import { Container, Header, Content, Text, Left, Body, Right, Button, Icon, Title, H2, View ,List, ListItem, Thumbnail } from 'native-base'
import {styles} from './Styles'
import {HistoryItem, UserHeader} from '../../components/index/'
import {ScrollView, Dimensions} from 'react-native'
class BuisnessHomePage extends Component{
    render(){
        return(
            <Container>
                <Content contentContainerStyle={styles.contentBorder} scrollEnabled={false}>
                    <View>

                    <View style={styles.historyBlock}>
                        <Text style={styles.history}>Active Promotions</Text>
                    </View>
                    </View>
                        <ScrollView>
                            <HistoryItem src={require('../../images/logo.png')} name='hello' balance='120' onPress={() => console.log("Hello I am a Button")}/>
                        </ScrollView>
                    <Button style={styles.addNewPromotion} onPress={()=>{
                        this.props.navigation.navigate("BuisnessAddPromotion");
                    }} large dark transparent>
                    <Icon name='md-add'/>
                    <H2>Add New Promotion</H2>
                    </Button>
                </Content>
            </Container>
        )
    }
}


export default BuisnessHomePage 