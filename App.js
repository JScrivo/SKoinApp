import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import LoginRegistrationNav from './src/routes/LoginRegistrationNav'
EStyleSheet.build();

class App extends Component{
  render(){
    return(
        <LoginRegistrationNav/>
    )
  }
};

export default App;
