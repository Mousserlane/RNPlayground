import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ARHomeScreen from '../screens/HomeScreen/ARHomeScreen';

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
        animationEnabled: true
    }
)

const ARStack = StackNavigator(
    {
        ARHome: { 
            screen: ARHomeScreen,
            navigationOptions: {
                title: 'Augmented Reality'
            }
        },
        // ARScreen: {
        //     screen: 
        // }
    },
    {
        mode: 'card',
        headerMode: 'none'
    }
)
export default StackNavigator(
    {
        Welcome: { screen: WelcomeStack },
        Home: { screen: HomeStack },
        ARHome: { screen: ARStack }
    },
    {
        mode: 'modal',
        headerMode: 'screen',
    }
    
)
