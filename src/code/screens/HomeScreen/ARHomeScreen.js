import React, { Component } from 'react';
import  { Container, Text, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Platform, View, TouchableOpacity } from 'react-native';

import { mainAppStyles, fontSize, brandColor } from '../../styles';

const gradientStartAt = {
    x: 1.0,
    y: 0.25
}
const gradientEndAt = {
    x: 0.5,
    y: 1.0
}

class ARHomeScreen extends Component {
    static defaultProps = {
        instruction: 'In Order to Run the AR on Android, your phone must support ARCore'
    }

    constructor(props) {
      super(props)
    }

    _onPressButton = () => {
      this.props.navigation.navigate('Profile');
    }

    _onPressText = () => {
      this.props.navigation.navigate('Welcome')
    }
    render() {
      const { instruction } = this.props;
      return (
        <LinearGradient
            start={gradientEndAt}
            end={gradientStartAt}
            colors={[brandColor.expressoPrimary, brandColor.expressoSecondary]}
            style={mainAppStyles.container}
        >
          <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {Platform.OS === 'iOS' ?
              <Text style={{ fontSize: fontSize.H1, color: brandColor.white, fontWeight: 'bold', marginBottom: 25 }}>
                Experience AR with ARKit
              </Text>
              :
              ( <View>
                  <Text style={{ fontSize: fontSize.H4, color: brandColor.white, marginBottom: 10, textAlign: 'center' }}>
                    {instruction}
                  </Text>
                  <TouchableOpacity onPress={this._onPressText}>
                  <Text style={{ fontSize: fontSize.H6, color: brandColor.white, fontWeight: 'bold', marginBottom: 25, textAlign: 'center' }}>
                    Click here to see more 
                  </Text>
                  </TouchableOpacity>
               </View>
              )
            }
            <View style={{ alignItems: 'center' }}>
            <Button transparent bordered rounded light onPress={this._onPressButton}>
              <Text>Start Now</Text>
            </Button>
            </View>
          </Container>
        </LinearGradient>
      )
    }
}

export default ARHomeScreen;