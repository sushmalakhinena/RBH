import  React, { Component } from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import {globalStyles} from '../styles/global';

export default class HomeScreen extends Component {


    render () {
        return (
            <View style={globalStyles.homeView}>
                <Button style={globalStyles.addChildBtn} title='Add Child' onPress = {() => this.props.navigation.navigate('AddChild')}></Button>
                <View>
                    <Text style={globalStyles.homeScreenText}>Rainbow Homes Child Reporting Tool</Text>
                </View>
                <Button style={globalStyles.vuChildBtn} onPress={() => this.props.navigation.navigate('ViewChild')} title="Veiw/Update Child"></Button>
            </View>
        );
    }
}
