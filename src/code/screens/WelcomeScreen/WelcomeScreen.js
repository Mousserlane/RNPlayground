import React, { Component } from 'react';
import { Animated, Easing, View } from 'react-native';

import Lottie from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

import  { Container, Text, Button } from 'native-base';

import { mainAppStyles, fontSize, brandColor } from '../../styles';

import animationdata from '../../../data/animation/react-anim.json'

const gradientStartAt = {
  x: 1.0,
  y: 0.25
}
const gradientEndAt = {
  x: 0.5,
  y: 1.0
}

class WelcomeScreen extends Component {
    constructor() {
      super();
      this.state = {
        progress: new Animated.Value(0)
      }
    }

    componentDidMount() {
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear
      }).start();
    }

    _onButtonClick = () => {
      this.props.navigation.navigate('Home');
    }

    render() {
      return (
        <LinearGradient
            start={gradientEndAt}
            end={gradientStartAt}
            colors={[brandColor.miragePrimary, brandColor.mirageSecondary]}
            style={mainAppStyles.container}
        >
          <Lottie
            ref={animation => { this.animation = animation }}
            source={animationdata}
            progress={this.state.progress}
          />

          <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: fontSize.H1, color: brandColor.white, fontWeight: 'bold', marginBottom: 25 }}>
              Welcome To The Playground
            </Text>
            <View style={{ alignItems: 'center' }}>
            <Button transparent bordered rounded light onPress={this._onButtonClick}>
              <Text>Click Here To Get Started</Text>
            </Button>
            </View>
          </Container>

        </LinearGradient>
      );
    }
};

export default WelcomeScreen