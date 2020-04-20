import React, {Component} from 'react'; 
import {Container, Header, Title, Content, Text, Button, Form, Item, Label, Input, Footer, View} from 'native-base'
import {styles} from './Styles'
import {APIlogin} from '../../communication/APIinteraction'
class LoginPage extends Component{
    constructor(props){
        super(props);
        global.sessionID = '';
        global.business = false;
        global.hash = '';
        global.json = {}
        //console.log('User Session: ' + global.sessionID);
    }

    render(){
        return(
            <Container>
                <Content style={styles.contentBorder} contentContainerStyle={styles.loginPageContainer}>
                    <Text style={styles.loginPageHeader}>$Points</Text>
                        <Form style={{alignItems: 'center'}}>
                            <Item regular style={styles.loginPageInput}>
                                <Input autoCapitalize="none" placeholder="Username"
                                onChangeText = {val => this.setState({username: val})}
                                />
                            </Item>
                            <Item regular style={styles.loginPageInput}>
                                <Input autoCapitalize="none" placeholder="Password"
                                onChangeText = {val => this.setState({password: val})}
                                />
                            </Item>
                            <Button style={styles.loginPageButton} onPress={async ()=>{
                                //this.props.navigation.navigate('HomePage');
                                if(await APIlogin(this.state.username, this.state.password)) this.props.navigation.navigate('HomePage');
                                else alert('Username or Password is incorrect, please try again.');
                                //APIregister();
                            }}>
                                <Text>Login</Text>
                            </Button>
                            <Button transparent style={styles.loginPageButton} onPress={()=>{
                                this.props.navigation.navigate('UserRegister')
                            }}>
                                <Text>Register</Text>
                            </Button>
                        </Form>
                </Content>
            </Container>
        )
    }
}

export default LoginPage;