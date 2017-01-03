import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class nogger extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          nogger.
        </Text>
        <Text style={styles.instructions}>
          To start using nogger, we need your info!
        </Text>
        <Text style={styles.instructions}>
          {`There's always a start -\nto the process of remembering.`}
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => alert("tricked yah! we´re not done yet!")}>
          <Text>Click me to start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF55',
  },
  welcome: {
    fontSize: 32,
    textAlign: 'center',
    margin: 16,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 16,
  },
  button: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 6,
  }
});

AppRegistry.registerComponent('nogger', () => nogger);
