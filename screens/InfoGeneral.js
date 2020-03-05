import React from 'react';
import {Text, View} from 'react-native';

export default class InfoGeneral extends React.Component{

    render() {
        return (
        <View>
            <Text>{this.props.navigation.getParam('IdentificationPlace1')}</Text>
            <Text>{this.props.navigation.getParam('MarkType1')}</Text>
            <Text>{this.props.navigation.getParam('IdentificationPlace2')}</Text>
            <Text>{this.props.navigation.getParam('MarkType2')}</Text> 
            <Text>{this.props.navigation.getParam('SpecialNeed')}</Text>
             <Text>{this.props.navigation.getParam('DurationOnStreet')}</Text>
            
            <Text>{this.props.navigation.getParam('PSOName') && this.props.navigation.getParam('PSOName')}</Text>            
            <Text>{this.props.navigation.getParam('CWCRefNo')}</Text>

        </View>
        );
    }

}