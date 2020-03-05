import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import {React} from 'react';
import GeneralInfoForm from '../components/GeneralInfoForm';
import InfoGeneral from '../screens/InfoGeneral';

const screens = {
    GeneralInfoForm: {
        screen: GeneralInfoForm
    },
    InfoGeneral: {
        screen: InfoGeneral
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerStyle: {
        height: 50
      },
      safeAreaInsets: { top: 0 }
    }
  })

export default createAppContainer(HomeStack)