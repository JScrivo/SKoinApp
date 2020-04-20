import React, {Component} from 'react'
import { Container, Content, View } from 'native-base'
import {styles} from './Styles'
import {UserHeader, PromotionCard} from '../../components/index'
import {ScrollView} from 'react-native'
import {APIgetInfo, APIgetPromotions} from '../../communication/APIinteraction'
import {withNavigation} from 'react-navigation'

class PromotionsPage extends Component{
    constructor(props){
        super(props);
        console.log('User Session: ' + global.sessionID);
        console.log('User Hash: ' + global.hash);

        this.state = {userInfo: {Balance: 'Loading', Name: 'Loading'}, promotions: []}
    }

    async componentDidMount(){
        const { navigation } = this.props;
        console.log('Home Page Mounted');
        this.focusListener = navigation.addListener("focus", async () => {
            await this.fetchInfo();
            await this.fetchPromotions();
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
    }

    async fetchPromotions(){
        var json = await APIgetPromotions(20);
        if(json == null){
            alert('Error loading promotion data, returning to login');
            this.props.navigation.navigate('LoginPage');
        } else {
            this.setState({promotions: json.Promotions});
        }
    }

    render(){
        var promotionList = [];
        var promotion;
        for(var i = 0; i < this.state.promotions.length; i++){
            promotion = this.state.promotions[i];

            promotionList.push(
                <PromotionCard 
                    companyName={promotion.Title} 
                    uri={{uri: promotion.IconURI}} 
                    promotionImage={{uri: promotion.CoverURI}} 
                    note={!promotion.Cost ? '' : promotion.Cost + ' Skoins'}
                    description={promotion.Description}
                    likesNum={promotion.Likes}
                    duration={promotion.DaysLeft}
                    key={i}/>
            );
        }


        return(
            <Container>
                <UserHeader props={this.props} balance={this.state.userInfo.Balance} userName={this.state.userInfo.Name}/>
                <Content>
                    <View>
                        <ScrollView>
                            {promotionList}
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default withNavigation(PromotionsPage)