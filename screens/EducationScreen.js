import React from 'react';
import {
    Button, Text, TextInput, View, Picker, ScrollView,
    KeyboardAvoidingView, Field,
} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/samplestyles';
import * as yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';
import CheckBox from 'react-native-check-box'
const EducationFormSchema = yup.object({
    Class: yup.string().required(),
    Medium: yup.string().required(),
    SchoolName: yup.string().required(),
    SchoolPlace: yup.string().required()
})

export default class EducationScreen extends React.Component {
    state = {
        showSD: false,
        showED: false,
        startingdate: '',
        endingdate: '',
    };
    ChildResult = () => {
        this.props.navigation.navigate('childresult');

    }
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            showElements: false,
            showSSElements: false
        }
    }
    _pickStartDate = (event, date, handleChange) => {
        console.log(date);
        let a = moment(date).format('DD/MM/YYYY');
        console.log(a);
        console.log(typeof (a));
        this.setState({
            startingdate: a, showSD: false
        });
        handleChange(a);
    }

    _pickEndDate = (event, date, handleChange) => {
        console.log(date);
        let a = moment(date).format('DD/MM/YYYY');
        console.log(a);
        console.log(typeof (a));
        this.setState({
            endingdate: a, showED: false
        });
        handleChange(a);
    }
    showSDDatepicker = () => {
        this.setState({ showSD: true });
    };
    showEDDatepicker = () => {
        this.setState({ showED: true });
    };

    handleDobChange = () => {
        console.log("change called");
    }

    render() {
        return (<View style={globalStyles.container1}>
            <View style={globalStyles.container}>
                <Formik
                    initialValues={
                        {
                            Class: '',
                            Medium: '',
                            SchoolName: '',
                            SchoolType: '',
                            SchoolPlace: '',
                            StartingDate: this.state.startingdate,
                            EndingDate: this.state.endingdate,
                            ChildStayType: '',
                            BridgeCourse: '',
                            CDetail: '',
                            BridgeCourseSchoolName: '',
                            ScholarshipSponsorship: '',
                        }
                    }
                    validationSchema={EducationFormSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        console.log(values);
                        this.setState({
                            date: null, showElements: false, showSSElements: false
                        });
                        alert("Data Has been submitted")
                        this.props.navigation.push('EducationScreen', values)

                    }}
                >
                    {props => (
                        <KeyboardAvoidingView behavior="padding"
                            enabled style={globalStyles.keyboardavoid}
                            keyboardVerticalOffset={200}>
                            <ScrollView>

                                <View>
                                    <Text style={globalStyles.text}>Class:</Text>
                                    <Text style={globalStyles.errormsg}>{props.touched.Class && props.errors.Class}</Text>
                                    <Picker
                                        selectedValue={props.values.Class}
                                        style={globalStyles.dropDown}
                                        onValueChange={props.handleChange('Class')}
                                        value={props.values.Class}
                                    >
                                        <Picker.Item label="Select Class" value="" />
                                        <Picker.Item label="I" value="I" />
                                        <Picker.Item label="II" value="II" />
                                        <Picker.Item label="III" value="III" />
                                        <Picker.Item label="VI" value="VI" />
                                        <Picker.Item label="V" value="V" />
                                        <Picker.Item label="VI" value="VI" />
                                        <Picker.Item label="VII" value="VII" />
                                        <Picker.Item label="Post Graduate" value="Post Graduate" />
                                        <Picker.Item label="Under Graduate" value="Under Graduate" />
                                        <Picker.Item label="Diploma" value="Diploma" />
                                        <Picker.Item label="Vocational" value="Vocational" />
                                        <Picker.Item label="Working/Job" value="Working/Job" />
                                        <Picker.Item label="Professional Course" value="Professional course" />
                                        <Picker.Item label="Child doing nothing" value="nothing" />

                                    </Picker>
                                    <Text style={globalStyles.text}>Medium:</Text>
                                    <Text style={globalStyles.errormsg}>{props.touched.Medium && props.errors.Medium}</Text>
                                    <Picker
                                        selectedValue={props.values.Medium}
                                        style={globalStyles.dropDown}
                                        onValueChange={props.handleChange('Medium')}
                                    >
                                        <Picker.Item label="Select Medium" value="" />
                                        <Picker.Item label="Assamee" value="Assamee" />
                                        <Picker.Item label="Bengali" value="Bengali" />
                                        <Picker.Item label="Hindi" value="Hindi" />
                                        <Picker.Item label="Kannada" value="Kannada" />
                                        <Picker.Item label="English" value="English" />
                                        <Picker.Item label="Punjabi" value="Punjabi" />
                                        <Picker.Item label="Telugu" value="Telugu" />
                                        <Picker.Item label="Malayalam" value="Malayalam" />

                                    </Picker>
                                    <Text style={globalStyles.text}>School Name:</Text>
                                    <Text style={globalStyles.errormsg}>{props.touched.Class && props.errors.SchoolName}</Text>
                                    <TextInput
                                        style={globalStyles.input}
                                        onChangeText={props.handleChange('SchoolName')}
                                        value={props.values.SchoolName}
                                    />
                                    <Text style={globalStyles.text}>School Type</Text>
                                    <Picker
                                        selectedValue={props.values.SchoolType}
                                        style={globalStyles.dropDown}
                                        onValueChange={props.handleChange('SchoolType')}
                                    >
                                        <Picker.Item label="Select SchoolType" value="" />
                                        <Picker.Item label="RSTC/Bridge Course" value="RSTC/Bridge Course" />
                                        <Picker.Item label="Govt" value="Govt" />
                                        <Picker.Item label="GovtAided" value="GovtAided" />
                                        <Picker.Item label="Private" value="Private" />
                                        <Picker.Item label="Convent" value="Convent" />
                                        <Picker.Item label="Special Education" value="Special Education" />
                                        <Picker.Item label="Govt Residential" value="Govt Residential" />
                                        <Picker.Item label="NIOS" value="NIOS" />

                                    </Picker>
                                    <Text style={globalStyles.text}>School Place:</Text>
                                    <Text style={globalStyles.errormsg}>{props.touched.Class && props.errors.SchoolPlace}</Text>
                                    <TextInput
                                        style={globalStyles.input}
                                        onChangeText={props.handleChange('SchoolPlace')}
                                        value={props.values.SchoolPlace}
                                    />
                                    <Text style={globalStyles.text}>Starting Date:</Text>
                                    <View style={globalStyles.dobView}>
                                        <TextInput
                                            style={globalStyles.inputText, globalStyles.dobValue}
                                            value={this.state.startingdate}
                                            editable={true}
                                            onValueChange={props.handleChange('StartingDate')}
                                        />
                                        <TouchableHighlight onPress={this.showSDDatepicker}>
                                            <View>
                                                <Feather style={globalStyles.dobBtn} name="calendar" />
                                            </View>
                                        </TouchableHighlight>
                                        <Text style={globalStyles.errormsg}>{props.touched.StartingDate && props.errors.StartingDate}</Text>
                                        {this.state.showSD &&
                                            <DateTimePicker
                                                style={{ width: 100 }}
                                                mode="date" //The enum of date, datetime and time
                                                value={new Date()}
                                                mode={'date'}
                                                onChange={(e, date) => this._pickStartDate(e, date, props.handleChange('StartingDate'))}
                                            />
                                        }
                                    </View>
                                    <Text style={globalStyles.text}>Ending Date:</Text>
                                    <View style={globalStyles.dobView}>
                                        <TextInput
                                            style={globalStyles.inputText, globalStyles.dobValue}
                                            value={this.state.endingdate}
                                            editable={false}
                                            onValueChange={props.handleChange('EndingDate')}
                                        />
                                        <TouchableHighlight onPress={this.showEDDatepicker}>
                                            <View>
                                                <Feather style={globalStyles.dobBtn} name="calendar" />
                                            </View>
                                        </TouchableHighlight>
                                        <Text style={globalStyles.errormsg}>{props.touched.EndingDate && props.errors.EndingDate}</Text>
                                        {this.state.showED &&
                                            <DateTimePicker
                                                style={{ width: 100 }}
                                                mode="date" //The enum of date, datetime and time
                                                value={new Date()}
                                                mode={'date'}
                                                onChange={(e, date) => this._pickEndDate(e, date, props.handleChange('EndingDate'))}
                                            />
                                        }
                                    </View>
                                    <Text style={globalStyles.text}>Child Stay Type:</Text>
                                    <Picker
                                        selectedValue={props.values.ChildStayType}
                                        style={globalStyles.dropDown}
                                        onValueChange={props.handleChange('ChildStayType')}
                                    >
                                        <Picker.Item label="Select Child Stay Type" value="" />
                                        <Picker.Item label="RH/SG" value="RH/SG" />
                                        <Picker.Item label="Other Residential Hostel" value="Other Residential Hostel" />
                                        <Picker.Item label="Day Scholar (With parents)" value="Day Scholar (With parents)" />

                                    </Picker>

                                    <Text style={globalStyles.text}>Bridge course after school:</Text>
                                    <Picker
                                        selectedValue={props.values.BridgeCourse}
                                        style={globalStyles.dropDown}
                                        onValueChange={(itemValue, itemIndex) => {
                                            props.setFieldValue('BridgeCourse', itemValue)
                                            if (itemValue == 'Yes') {
                                                this.setState({ showElements: true })
                                            } else {
                                                this.setState({ showElements: false })
                                            }
                                        }}

                                        value={props.values.childStatus}>
                                        <Picker.Item label="Select Bridge Course" value="" />
                                        <Picker.Item label="Yes" value="Yes" />
                                        <Picker.Item label="No" value="No" />

                                    </Picker>
                                    {this.state.showElements ? null :
                                        <View>
                                            <Text style={globalStyles.text}>Class details:</Text>
                                            <TextInput
                                                style={globalStyles.input}
                                                onChangeText={props.handleChange('CDetail')}
                                                value={props.values.VPCDetail}
                                            />
                                        </View>
                                    }

                                    {this.state.showElements ?
                                        <View>
                                            <Text style={globalStyles.text}>Bridge Course School Name:</Text>
                                            <Picker
                                                selectedValue={props.values.BridgeCourseSchoolName}
                                                style={globalStyles.dropDown}
                                                onValueChange={props.handleChange('BridgeCourseSchoolName')}
                                            >
                                                <Picker.Item label="Select Bridge Course School Name" value="" />
                                                <Picker.Item label="Rainbow" value="Rainbow" />
                                                <Picker.Item label="Sneha Ghar" value="Sneha Ghar" />

                                            </Picker>
                                        </View>
                                        : null}
                                    <Text style={globalStyles.text}>Scholarship/Sponsorship:</Text>
                                    <Picker
                                        selectedValue={props.values.ScholarshipSponsorship}
                                        style={globalStyles.dropDown}
                                        onValueChange={(itemValue, itemIndex) => {
                                            props.setFieldValue('ScholarshipSponsorship', itemValue)
                                            if (itemValue == 'Yes') {
                                                this.setState({ showSSElements: true })
                                            } else {
                                                this.setState({ showSSElements: false })
                                            }
                                        }}

                                        value={props.values.ScholarshipSponsorship}>
                                        <Picker.Item label="Select Scholarship/Sponsorship" value="" />
                                        <Picker.Item label="Yes" value="Yes" />
                                        <Picker.Item label="No" value="No" />

                                    </Picker>

                                    {this.state.showSSElements ?
                                        <View>
                                            <CheckBox
                                                style={{ flex: 1, padding: 10 }}
                                                onClick={() => {
                                                    this.setState({
                                                        isEducation: !this.state.isEducation
                                                    })
                                                }}
                                                isChecked={this.state.isEducation}
                                                leftText={"Education"}
                                            />
                                            <CheckBox
                                                style={{ flex: 1, padding: 10 }}
                                                onClick={() => {
                                                    this.setState({
                                                        isHealth: !this.state.isHealth
                                                    })
                                                }}
                                                isChecked={this.state.isHealth}
                                                leftText={"Health"}
                                            />
                                        </View>
                                        : null}


                                    <Button style={globalStyles.button} title="Submit" onPress={props.handleSubmit} />

                                    <Text style={globalStyles.padding}></Text>
                                    <View>
                                        <Button style={globalStyles.button1} title="Exam results" onPress={this.ChildResult} />
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