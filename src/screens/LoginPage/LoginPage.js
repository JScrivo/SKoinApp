import React, {Component} from 'react'; 
import {Container, Header, Title, Content, Text, Button, Form, Item, Label, Input, Footer, View} from 'native-base'
import {styles} from './Styles'
class LoginPage extends Component{
    render(){
        return(
            <Container>
                <Content style={styles.contentBorder} contentContainerStyle={styles.loginPageContainer}>
                    <Text style={styles.loginPageHeader}>$Points</Text>
                        <Form style={{alignItems: 'center'}}>
                            <Item regular style={styles.loginPageInput}>
                                <Input autoCapitalize="none" placeholder="Email"/>
                            </Item>
                            <Item regular style={styles.loginPageInput}>
                                <Input autoCapitalize="none" placeholder="Password"/>
                            </Item>
                            <Button style={styles.loginPageButton} onPress={()=>{
                                this.props.navigation.navigate('HomePage');
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