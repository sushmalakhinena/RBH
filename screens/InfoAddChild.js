import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../styles/global';

export default class InfoAddChild extends React.Component{

    render() {
        return (
        <View style = {globalStyles.container}>
            
            <Text>{this.props.navigation.getParam('ChildID')}</Text>
            <Text>{this.props.navigation.getParam('FirstName')}</Text>
            <Text>{this.props.navigation.getParam('LastName')}</Text>
            {/* <Text>{this.props.navigation.getParam('Community')}</Text> */}
            {/* <Text>{this.props.navigation.getParam('DOB')}</Text> */}
            <Text>{this.props.navigation.getParam('Religion')}</Text>


        </View>
        );
    }

}