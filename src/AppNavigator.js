import { createStackNavigator } from 'react-navigation-stack';
import Layout from './Layout'

const AppNavigator = createStackNavigator({
    Layout: { screen: Layout },
},
    {
        initialRouteName: "Layout"
    }
    );

export default AppNavigator;
