import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
const style = {
    buttonOutline: {

    }
}
export const ButtonOutline = (props) => {
    return (
      <TouchableOpacity style={{ backgroundColor: 'rgba(52,52,52,alpha)' }}>
          <Text>
            {props.buttonTitle}
          </Text>
      </TouchableOpacity>
    )
}