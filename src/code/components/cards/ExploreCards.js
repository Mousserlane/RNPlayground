import React from 'react';
import PropTypes from 'prop-types'
import { Image, TouchableOpacity } from 'react-native';
import { Containe, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export const ExploreCards = (props) => {
  console.log('props', props);
    return (
      <TouchableOpacity onPress={props.onpress} style={{ flex: 1 }}>
      <Card>
        <CardItem>
          <Left>
              <Body>
                <Text>{props.title}</Text>
              </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image 
            source={{ uri: props.imageuri }}
            style={{ height: 200, width: '100%' }}
          />
        </CardItem>
      </Card>
      </TouchableOpacity>
    )
};

ExploreCards.propTypes = {
  title: PropTypes.string.isRequired,
  imageuri: PropTypes.string,
  onpress: PropTypes.func
}
