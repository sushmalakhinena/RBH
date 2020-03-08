import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import EducationScreen from '../screens/EducationScreen';
import StatusScreen from '../screens/StatusScreen';
import HealthScreen from '../screens/HealthScreen';
import ChildList from '../components/ChildList';
import ViewProfile from '../screens/ViewProfile';
import GeneralInfoForm from '../components/GeneralInfoForm';
import InfoGeneral from '../screens/InfoGeneral';
import GeneralInfoStack from './GeneralInfoNavigation';
import childResultScreen from '../screens/ChildResultScreen';


// const Stack = createStackNavigator();
// export default function StackNavigation() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="ChildList" component={ChildList} />
//                 <Stack.Screen name="About" component={EducationScreen} />
//                 <Stack.Screen name="Status" component={StatusScreen} />
//                 <Stack.Screen name="Health" component={HealthScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }



const screens = {
    ViewChild: {
        screen: ChildList,
    },
    Education: {
        screen: EducationScreen
    },
    Status: {
        screen: StatusScreen
    },
    Health: {
        screen: HealthScreen
    },
    GeneralInfo: {
        screen: GeneralInfoStack
    },
    Profile: {
        screen: ViewProfile
    },
    childresult: {
        screen: childResultScreen,
    },
};


const HomeStack = createStackNavigator(screens, { headerMode: 'none' });

export default createAppContainer(HomeStack)