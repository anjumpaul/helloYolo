import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import HirerPostRequirement from './src/components/HirerPostRequirement.js'
export default class App extends React.Component {
  render() {
    return (
      <View>

        <HirerPostRequirement/>

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
