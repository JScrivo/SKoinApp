import React, {Component} from 'react'
import { Card, CardItem, Left, Thumbnail, Body, Text, Right, Button , Icon, H3} from 'native-base'
import {Image} from 'react-native'

export default class PromotionCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        // var src = require(this.props.uri);
        var companyName = 'hello';
        return(
            <Card>
                <CardItem>
                    <Left>
                    <Thumbnail source={this.props.uri} />
                    <Body>
                    <Text>{this.props.companyName}</Text>
                    <Text note>{this.props.note}</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={this.props.promotionImage} style={{height: 200, width: 200, flex: 1}}/>
                    
                </CardItem>
                <CardItem >
                <Text style={{fontWeight: 'bold'}}>Description </Text>
                </CardItem>
                <CardItem bordered>
              <Body>
                <Text>
                    {this.props.description}
                </Text>
              </Body>
            </CardItem>
                <CardItem>

              <Left>
                <Button transparent onPress={this.props.likeEvent}>
                  <Icon active name="thumbs-up" />
                    <Text>{this.props.likesNum}</Text>
                </Button>
              </Left>
              <Right>
                <Text>{this.props.duration + (this.props.duration == 1 ? ' day' : ' days') + ' left'}</Text>
              </Right>
            </CardItem>
            </Card>
          )
    }

}