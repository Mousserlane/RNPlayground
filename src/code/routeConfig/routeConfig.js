import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import { Image } from 'react-native';

const WelcomeStack = StackNavigator(
    {
        Welcome:{ 
            screen: WelcomeScreen,
            navigationOptions: {
                header: null
            }
        },
    },
);

const HomeStack = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: (navigation) => {
              return {
                header: null,
                title: 'Home',
                // tabBarIcon: ({ focused }) => {
                //     return (
                //       <Image 
                //         source={focused ?
                //           require() : require()
                //         }
                //       />
                //     )
                // },
                tabBarVisible: navigation.state && navigation.state.params ? navigation.state.params.isTabBarVisible : true
              }
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Profile',
                header: null,
                tabBarVisible: true
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        swipeEnabled: false,
        animationEnabled: false
    }
)

export default StackNavigator(
    {
        Welcome: { screen: WelcomeStack },
        Home: { screen: HomeStack }
    },
    {
        mode: 'modal',
        headerMode: 'screen',
    }
    
)
