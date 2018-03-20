import React, { Component } from 'react';
import  { Container, Text, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Platform, View } from 'react-native';

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

    render() {
      const { instruction } = this.props;
      return (
        <LinearGradient
            start={gradientEndAt}
            end={gradientStartAt}
            colors={[brandColor.melonPrimary, brandColor.melonSecondary]}
            style={mainAppStyles.container}
        >
          <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: fontSize.H1, color: brandColor.white, fontWeight: 'bold', marginBottom: 25 }}>
              {Platform.OS === 'iOS' ?
                <Text>Experience AR with ARKit</Text> :
                <Text>{instruction}</Text>
              }
            </Text>
            <View style={{ alignItems: 'center' }}>
            <Button transparent bordered rounded light onPress={() => {
                this.props.navigation.navigate('Profile');
            }}>
              <Text>Start Now</Text>
            </Button>
            </View>
          </Container>
        </LinearGradient>
      )
    }
}

export default ARHomeScreen;