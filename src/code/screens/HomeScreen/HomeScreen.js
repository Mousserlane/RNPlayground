import React, { Component } from 'react';
import { Container, Text, View } from 'native-base';
import { ScrollView } from 'react-native';
import { mainAppStyles, fontSize, brandColor, marginBase, paddingBase } from '../../styles';

import { ExploreCards } from '../../components'
class HomeScreen extends Component {
    // constructor() {
    //   super();
    // }

    render() {
      return (
        <Container>
          <ScrollView>

            <View style={{ flex: 1, margin : 15 }}>
              <Text style={{ fontSize: fontSize.H3, fontWeight: 'bold' }}>
                Explore The Playground
              </Text>
              <ExploreCards />
            </View>

            <View style={{ flex: 1, margin : 15 }}>
              <Text style={{ fontSize: fontSize.H3, fontWeight: 'bold' }}>
                Play with something
              </Text>
            </View>

            <View style={{ flex: 1, margin : 15 }}>
              <Text style={{ fontSize: fontSize.H3, fontWeight: 'bold' }}>
                Play with something
              </Text>
            </View>

          </ScrollView>
        </Container>
      )
    }
}

export default HomeScreen;
