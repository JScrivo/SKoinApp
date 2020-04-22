import React, {Component} from 'react'
import { Container, Header, Content, Text, Left, Body, Right, Button, Icon, Title, H2, View ,List, ListItem, Thumbnail } from 'native-base'
import {styles} from './Styles'
import {HistoryItem, UserHeader} from '../../components/index/'
import {ScrollView, Dimensions} from 'react-native'
import {APIgetInfo, APIgetQRURI} from '../../communication/APIinteraction'
import {withNavigation} from 'react-navigation'
class BuisnessHomePage extends Component{
    constructor(props){
        super(props);
        console.log('User Session: ' + global.sessionID);
        //console.log('User Hash: ' + global.hash);

        this.state = {userInfo: {Promotions: []}}
    }

    async componentDidMount(){
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("focus", async () => {
            await this.fetchInfo();
        });
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    async fetchInfo(){
        var json = await APIgetInfo(global.sessionID, global.hash);
        if(json == null){
            alert('Error loading business info, returning to login');
            this.props.navigation.navigate('LoginPage');
        } else {
            this.setState({userInfo: json});
        }
    }


    render(){
        var promotionList = [];
        var promotion;
        for(var i = 0; i < this.state.userInfo.Promotions.length; i++){
            promotion = this.state.userInfo.Promotions[i];

            promotionList.push(
                <HistoryItem src={{uri: promotion.CoverURI}} key={i} name={promotion.Title} balance={promotion.Cost}/>
            );
        }

        return(
            <Container>
                <Content contentContainerStyle={styles.contentBorder} scrollEnabled={false}>
                    <View>

                    <View style={styles.historyBlock}>
                        <Text style={styles.history}>Active Promotions</Text>
                    </View>
                    </View>
                        <ScrollView>
                            {promotionList}
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


export default withNavigation(BuisnessHomePage) 