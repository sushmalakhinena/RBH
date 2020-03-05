import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';

export default class Login extends Component {


    state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }

    _userLogin = () => {
        this.setState({ isLoggingIn: true, message: 'Logging In, Please wait' });
        if(this.state.username == "admin" && this.state.password == "admin") {
            if(this.props.onLoginPress) {
                this.props.onLoginPress();
            }
            else {
                this.props.navigation.navigate('Home');
            }
        }
        else {
            this.setState({ isLoggingIn: false, message: 'Please enter a valid usernam and password' });
        }
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
        this.setState({isLoggingIn: false});
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={titlestyle.container}>
                    Login into the App
                </Text>
                <TextInput
                    ref={component => this._username = component}
                    onChangeText={(username) => this.setState({username})}
                    autoFocus={true}
                    placeholder='Username'
                />
                <TextInput
                    ref={component => this._password = component}
                    placeholder='Password'
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    onFocus={this.clearPassword}
                    onSubmitEditing={this._userLogin}
                />
                {!!this.state.message && (
                    <Text
                	    style={{fontSize: 14, color: 'blue', padding: 5}}>
                		{this.state.message}
                	</Text>
                )}
                <View style={{margin:7}} />
                <Button
                    disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
                    onPress={this._userLogin}
                    title="Submit"
                />

                  </ScrollView>
            )
    }
}

const titlestyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});