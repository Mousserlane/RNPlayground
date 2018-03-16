import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import SecondScreen from '../screens/SecondScreen/SecondScreen';

const WelcomeStack = StackNavigator(
    {
        Welcome:{ 
            screen: WelcomeScreen,
            navigationOptions: {
                header: null
            }
        },
        SecondScreen: {
            screen: SecondScreen,
        }
    },
);

export default StackNavigator(
    {
        Welcome: { screen: WelcomeStack },
    },
    {
        mode: 'modal',
        headerMode: 'screen',
    }
    
)
