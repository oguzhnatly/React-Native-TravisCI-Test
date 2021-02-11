import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
 *  + Accurately renders the text from the value prop
 *  + Wrapping with a flex: 1 style properly
 *  + Color of the text must be red
 * 
 *  Main View   testID='wrapper'
 *  Text        testID='text'
 */

const App = (props) => {
  return (
    <View style={styles.container} testID="wrapper">
      <Text style={styles.textColor} testID="text">
        {props.value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textColor: {
        color: 'red',
    }
});

export default App;