import React from 'react';
import {Button, Text, TextInput, View, Picker, ScrollView,
    KeyboardAvoidingView} from 'react-native';
import {Formik} from 'formik';
import {globalStyles} from '../styles/global';
import * as yup from 'yup';

const AddChildSchema = yup.object({
    ChildID: yup.string(),
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    //DOB: yup.string().required(),
    Religion: yup.string().required()
})

export default class AddChild extends React.Component{
    render() {
        return (
            <View style = {globalStyles.container}>

                <Formik
                initialValues = {
                    {
                        ChildID: '',
                        FirstName: '',
                        LastName: '',
                        //DOB: '',
                        Religion: '',
                    }
                }
                validationSchema = {AddChildSchema}
                onSubmit = {(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                    alert("Data Has been submitted")
                    this.props.navigation.navigate('Info', values)
                    
                }}
                >
                    {props => (
                        <KeyboardAvoidingView behavior="padding" 
                            enabled style={globalStyles.keyboardavoid} 
                            keyboardVerticalOffset={150}>
                        <ScrollView>
                            
                            <View>
                                <Text style = {globalStyles.text}>Child Id</Text>
                                <TextInput
                                    style = {globalStyles.input}
                                    onChangeText = {props.handleChange('ChildID')} 
                                    value = {props.values.ChildID}
                                />
                                <Text style = {globalStyles.text}>FirstName</Text>
                                <Text style = {globalStyles.errormsg}>{props.touched.FirstName && props.errors.FirstName}</Text>
                                <TextInput
                                    style = {globalStyles.input}
                                    onChangeText = {props.handleChange('FirstName')}
                                    value = {props.values.FirstName}
                                    // onBlur = {props.handleBlur('PSOName')} this can be used for real-time validation
                                />
                                <Text style = {globalStyles.text}>LastName</Text>
                                <Text style = {globalStyles.errormsg}>{props.touched.LastName && props.errors.LastName}</Text>
                                <TextInput
                                    style = {globalStyles.input}
                                    onChangeText = {props.handleChange('LastName')}
                                    value = {props.values.LastName}
                                />
                                <Text style = {globalStyles.text}>Religion</Text>
                                <Text style = {globalStyles.errormsg}>{props.touched.Religion && props.errors.Religion}</Text>
                                <Picker
                                    selectedValue = {props.values.Religion}
                                    onValueChange = {props.handleChange('Religion')}
                                    style = {globalStyles.dropDown}
                                >
                                    <Picker.Item label='Select Religion' value = ''/>
                                    <Picker.Item label='Hindu' value = 'Hindu'/>
                                    <Picker.Item label='Muslim' value = 'Muslim'/>
                                    <Picker.Item label='Christian' value = 'Christian'/>
                                </Picker>

                                <Button style = {globalStyles.button} title="Submit" onPress={props.handleSubmit} />
                            </View>
                            </ScrollView>  
                            </KeyboardAvoidingView>
                                                  
                    )}

                </Formik>

            </View>
        );
    }
}