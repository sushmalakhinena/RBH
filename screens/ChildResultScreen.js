import React from 'react';
import {
    Button, Text, TextInput, View, Picker, ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/samplestyles';

export default class ChildResultScreen extends React.Component {
    render() {
        return (<View style={globalStyles.container1}>
            <View style={globalStyles.container}>

                <Formik
                    initialValues={
                        {
                            Appeared: '',
                            Result: '',
                            Percentage: '',
                        }
                    }

                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        console.log(values);
                        alert("Data Has been submitted\n" +
                            "Appeared:" + values.Appeared +
                            "\nResult:" + values.Result +
                            "\nPercentage:" + values.Percentage)
                        this.props.navigation.push('ChildResultScreen', values)

                    }}
                >
                    {props => (
                        <KeyboardAvoidingView behavior="padding"
                            enabled style={globalStyles.keyboardavoid}
                            keyboardVerticalOffset={200}>
                            <ScrollView>

                                <View>
                                    <Text style={globalStyles.text}>Appeared:</Text>
                                    <Picker
                                        selectedValue={props.values.Appeared}
                                        style={globalStyles.dropDown}
                                        onValueChange={props.handleChange('Appeared')}
                                    >
                                        <Picker.Item label="Select" value="" />
                                        <Picker.Item label="Yes" value="Yes" />
                                        <Picker.Item label="No" value="No" />
                                    </Picker>
                                    <View>
                                        <Text style={globalStyles.text}>Result:</Text>
                                        <Picker
                                            selectedValue={props.values.Result}
                                            style={globalStyles.dropDown}
                                            onValueChange={props.handleChange('Result')}
                                        >
                                            <Picker.Item label="Select" value="" />
                                            <Picker.Item label="Pass" value="Pass" />
                                            <Picker.Item label="Fail" value="Fail" />
                                        </Picker>
                                        <Text style={globalStyles.text}>Percentage:</Text>
                                        <TextInput
                                            style={globalStyles.input}
                                            onChangeText={props.handleChange('Percentage')}
                                            value={props.values.Percentage}
                                        />
                                        <Text style={globalStyles.padding}></Text>
                                        <Button style={globalStyles.button} title="Submit" onPress={props.handleSubmit} />
                                    </View>
                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>

                    )}

                </Formik>
            </View >
        </View >
        );
    }
}