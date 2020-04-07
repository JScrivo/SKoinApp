import React, {Component} from 'react'
import { Container, Content, Form, Item, Input, Text, Header, Left, Button, Icon, Body, Segment, Right, Title} from 'native-base'
import {styles} from './Styles'
class BusinessRegisterPage extends Component{
    render(){
        return(
            <Container >
                <Header hasSegment style={{justifyContent: "space-between"}}>
                    <Left>
                        <Button transparent onPress={()=>{
                                this.props.navigation.navigate('LoginPage')
                            }}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Business Registration</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content style={styles.contentBorder} >
                <Text style={styles.textRegistration}>Create a new Business account</Text>
                <Form style={{alignItems: 'center'}}>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Business Name"/>
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Email"/>
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Phone Number"/>
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Address"/>
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Password"/>
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Confirm Password"/>
                    </Item>
                    <Button style={styles.loginPageButton}>
                            <Text>Join Now!</Text>
                    </Button>
                </Form>
                </Content>
            </Container>
        )
    }
}

export default BusinessRegisterPage