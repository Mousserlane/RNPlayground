import React from 'react';
import { Image } from 'react-native';
import { Containe, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export const ExploreCards = (props) => {
    return (
      <Card>
        <CardItem>
          <Left>
              <Body>
                <Text>props.title</Text>
              </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgbA8oudL4fX_RAVwE4yI-3C_PGKYbg47wgXnS0Y5bkkpgSeXnA' }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
    )
};
