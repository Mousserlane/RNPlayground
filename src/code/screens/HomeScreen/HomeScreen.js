import React, { Component } from 'react';
import { Container, Text, View } from 'native-base';
import { ScrollView, FlatList } from 'react-native';
import { mainAppStyles, fontSize, brandColor, marginBase, paddingBase } from '../../styles';

import { ExploreCards } from '../../components'
import menudata from '../../../data/menudata.json';

class HomeScreen extends Component {
    // constructor() {
    //   super();
    // }

    render() {
      console.log('isi menudata', menudata);
      return (
        <Container>
          <ScrollView>

            <View style={{ flex: 1, margin : 15 }}>
              <Text style={{ fontSize: fontSize.H3, fontWeight: 'bold' }}>
                Explore The Playground
              </Text>
                {menudata && menudata.length > 0 &&
                  <FlatList
                    horizontal 
                    data={menudata}
                    keyExtractor={(menu, key) => key.toString()}
                    renderItem={({item}) => {
                      return (
                        <ExploreCards title={item.title} imageuri={item.imageuri} onpress={() => {
                          console.log("pressed");
                          this.props.navigation.navigate(item.link)
                        }} />
                      )
                    }}
                  />
                }
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
