import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import {React} from 'react';
import AddChild from '../components/AddChildForm';
import InfoAddChild from '../screens/InfoAddChild';

const screens = {
    AddChild: {
        screen: AddChild
    },
    Info: {
        screen: InfoAddChild
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerStyle: {
      height: 50
    },
    safeAreaInsets: { top: 0 }
  }})

export default createAppContainer(HomeStack)