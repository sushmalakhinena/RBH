import React, { Component } from 'react';
//import Dialog, { DialogContent } from 'react-native-popup-dialog';
//import { Button } from 'react-native';
import {  View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';

export default class ViewProfile extends Component {

state = { description: '' }
   handleText = (text) => {
      this.setState({ description: text})
   }
   addDetails = (text) => {
      alert("Details added successfully")
   }
   render(){
       return(
          <View style = {styles.container}>
             <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Add Child description briefly"
             placeholderTextColor = "#000000"
             onChangeText = {this.handleText}/>

             <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                   () => this.addDetails(this.state.description)
                }>
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>
          </View>

         //  <View style={styles.container}>
         //    <Button title="Show Dialog" onPress={() => {this.setState({ visible: true });}} />
         //    <Dialog visible={this.state.visible} onTouchOutside={() => {this.setState({ visible: false });}}>
         //       <DialogContent> Please Update Child's Description</DialogContent>
         //    </Dialog>
         // </View>

)
   }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 50
   },   
   input: {
      margin: 15,
      height: 120,
      paddingLeft: 90,
      borderColor: '#000000',
      borderWidth: 1
   },
   submitButton: {
      margin: 15,
      height: 40,
      paddingLeft: 150,
      paddingTop: 10,
      borderColor: '#000000',    
      borderWidth: 1
   },
   submitButtonText:{
      color: '#000000'
   }
})

