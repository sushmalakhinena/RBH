import React from 'react';
import Screen from '../screens/Screens';
import Login from '../screens/Login';


export const Home = ({navigation}) => <Screen navigation={navigation} screen='home' />
export const AddChild = ({navigation}) => <Screen navigation={navigation} screen='addChild' />
export const ViewChild = ({navigation}) => <Screen navigation={navigation} screen='viewChild' />
export const Report = ({navigation}) => <Screen navigation={navigation} screen='report' />
export const LoginScreen = ({navigation}) => <Login navigation={navigation} />