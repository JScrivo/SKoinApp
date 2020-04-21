import React, {Component} from 'react'
import { Container, Content, Form, Item, Input, Text, Header, Left, Button, Icon, Body, Segment, Right, Title} from 'native-base'
import {styles} from './Styles'
import { APIregisterBusiness } from '../../communication/APIinteraction'
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
                        <Input autoCapitalize="none" placeholder="Business Name"
                        onChangeText = {val => this.setState({name: val})}
                        />
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Username"
                        onChangeText = {val => this.setState({username: val})}
                        />
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Email"
                        onChangeText = {val => this.setState({email: val})}
                        />
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Phone Number"
                        onChangeText = {val => this.setState({phone: val})}
                        />
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Address"
                        onChangeText = {val => this.setState({address: val})}
                        />
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Password" secureTextEntry={true}
                        onChangeText = {val => this.setState({password: val})}
                        />
                    </Item>
                    <Item regular style={styles.loginPageInput}>
                        <Input autoCapitalize="none" placeholder="Confirm Password" secureTextEntry={true}
                        onChangeText = {val => this.setState({password2: val})}
                        />
                    </Item>
                    <Button style={styles.loginPageButton}onPress={async ()=>{
                                if(this.state.password.localeCompare(this.state.password2) == 0){
                                    if(await APIregisterBusiness(this.state.username, this.state.email, this.state.phone,
                                        this.state.password, this.state.address, this.state.name)) this.props.navigation.navigate('LoginPage');
                                } else {
                                    alert('Passwords do not match');
                                }
                            }}>
                            <Text>Join Now!</Text>
                    </Button>
                </Form>
                </Content>
            </Container>
        )
    }
}

export default BusinessRegisterPage