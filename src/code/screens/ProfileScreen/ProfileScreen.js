import React, { Component } from 'react';
import { Container, Text } from 'native-base';

import { mainAppStyles } from '../../styles';

class ProfileScreen extends Component {
    // constructor() {
    //   super();
    // }

    render() {
      return (
        <Container style={mainAppStyles.container}>
            <Text> This is the Profile Screen</Text>
        </Container>
      )
    }
}

export default ProfileScreen;