import { StyleSheet, Dimensions } from 'react-native';

const mainAppStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

const imgResponsive = { 
  width: '100%',
  height: Dimensions.get('window').width / 3
}

export {
    mainAppStyles,
    imgResponsive
}