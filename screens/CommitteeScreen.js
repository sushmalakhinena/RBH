import React, { Component } from 'react';
import {  View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
//import HomeScreen from './HomeScreen';
import CheckBox from 'react-native-check-box';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class CommitteeScreen extends Component{
   
   constructor(props){
      super(props)
      this.state = {
         date:'',
         suggestion: '',
      };
    }
   handleText = (text) => {
      this.setState({ suggestion: text})
   }
   addDetails = (text) => {
      alert("Details added successfully")
   }

    componentDidMount(){
      var that = this;
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year

      that.setState({
         //Setting the value of the date time
         date:
           date + '/' + month + '/' + year
    });
   }

   render(){
    return(
       <View style = {styles.container}>
          <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Enter suggestions given by committee members"
          placeholderTextColor = "#000000"
          onChangeText = {this.handleText}/>

           <View style={{ flexDirection: 'row' }}>
           <CheckBox style={styles.checkBoxStyle}
               onClick={()=>{
                  this.setState({
                     isMember1: !this.state.isMember1
                  })
                  }}
                  isChecked={this.state.isMember1}   
                  
            />
            <Text style={styles.checkBoxText}> Staff Member 1</Text>
            </View> 

            <View style={{ flexDirection: 'row' }}>
             <CheckBox
                style={{flex: 1, paddingLeft: 20}}
                onClick={()=>{
                this.setState({
                  isMember2:!this.state.isMember2
                })
                }}
                isChecked={this.state.isMember2}         
            />
            <Text style={styles.checkBoxText}> Staff Member 2</Text>
            </View>
            
            <View style={{ flexDirection: 'row' }}>
             <CheckBox
                style={{flex: 1, paddingLeft: 20}}
                onClick={()=>{
                this.setState({
                  isMember3:!this.state.isMember3
                })
                }}
                isChecked={this.state.isMember3}         
            />
            <Text style={styles.checkBoxText}> Staff Member 3</Text>
            </View> 
            
            <View style={{ flexDirection: 'row' }}>
             <CheckBox
                style={{flex: 1, paddingLeft: 20}}
                onClick={()=>{
                this.setState({
                  isMember4:!this.state.isMember4
                })
                }}
                isChecked={this.state.isMember4}         
            />
            <Text style={styles.checkBoxText}> Staff Member 4</Text>
            </View> 
            <View style={{ flexDirection: 'row' }}>
             <CheckBox
                style={{flex: 1, paddingLeft: 20}}
                onClick={()=>{
                this.setState({
                  isMember5:!this.state.isMember5
                })
                }}
                isChecked={this.state.isMember5}         
            />
            <Text style={styles.checkBoxText}> Staff Member 5</Text>
            </View> 
            <View style={{ flexDirection: 'row' }}>
             <CheckBox
                style={{flex: 1, paddingLeft: 20}}
                onClick={()=>{
                this.setState({
                  isMember6:!this.state.isMember6
                })
                }}
                isChecked={this.state.isMember6}         
            />
            <Text style={styles.checkBoxText}> Staff Member 6</Text>
            </View> 
            <View style={{ flexDirection: 'row' }}>
             <CheckBox
                style={{flex: 1, paddingLeft: 20}}
                onClick={()=>{
                this.setState({
                  isMember7:!this.state.isMember7
                })
                }}
                isChecked={this.state.isMember7}         
            />
            <Text style={styles.checkBoxText}> Staff Member 7</Text>
            </View> 
            <View style={{ flexDirection: 'row' }}>
             <CheckBox
                style={{flex: 1, paddingLeft: 20}}
                onClick={()=>{
                this.setState({
                  isMember8:!this.state.isMember8
                })
                }}
                isChecked={this.state.isMember8}         
            />
            <Text style={styles.checkBoxText}> Staff Member 8</Text>
            </View> 
            <View style={{ flexDirection: 'row' }}>
             <CheckBox
                style={{flex: 1, paddingLeft: 20}}
                onClick={()=>{
                this.setState({
                  isMember9:!this.state.isMember9
                })
                }}
                isChecked={this.state.isMember9}         
            />
            <Text style={styles.checkBoxText}> Staff Member 9</Text>
            </View> 
            <View style={{ flexDirection: 'row' }}>
             <CheckBox
                style={{flex: 1, paddingLeft: 20}}
                onClick={()=>{
                this.setState({
                  isMember10:!this.state.isMember10
                })
                }}
                isChecked={this.state.isMember10}         
            />
            <Text style={styles.checkBoxText}> Staff Member 10</Text>
            </View> 

          <DateTimePicker
               style={{width: 200}}
               date={this.state.date}
               mode="date"
               placeholder="Select Date"
               format="YYYY-MM-DD"
               minDate="2015-01-01"
               maxDate="2020-03-03"
               confirmBtnText="Confirm"
               cancelBtnText="Cancel"
               customStyles={{
                  dateIcon: {
                     position: 'absolute',
                     left: 2,
                     top: 4,
                     marginLeft: 10
                  },
                  dateInput: {
                     marginLeft: 50,
                     marginTop: 10,
                     borderColor: "#000000"
                    
                  }
               }}
               onDateChange={(date) => {this.setState({date: date})}}
          />
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => this.addDetails(this.state.suggestion)
             }>
             <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
       </View>
    )
}
}

const styles = StyleSheet.create({
container: {
   paddingTop: 50
},
input: {
   margin: 15,
   height: 150,
   borderColor: '#000000',
   borderWidth: 1,
   paddingLeft: 10
},
submitButton: {
   margin: 15,
   marginTop: 30,
   height: 40,
   paddingLeft: 150,
   paddingTop: 10,
   borderColor: '#000000',    
   borderWidth: 1
},
submitButtonText:{
   color: '#000000'
},
checkBoxStyle:{
   flex: 1, 
   paddingLeft: 20
},
checkBoxText:{
   marginTop: 2,
   marginLeft: 30,
   paddingRight:240
}
})
