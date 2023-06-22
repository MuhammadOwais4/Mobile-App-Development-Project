import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TextInput,Button,SafeAreaView,Alert } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}> LOGIN </Text>
 <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="User Name"
      />
          </View>
 <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Password"
       textContentType={'password'}
       autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={true}
      />
       <Button
              title="Submit"
              color="#f194ff"
              onPress={() => Alert.alert('LOGIN Submit')}
            />
         </View>

    </View>
  );
};

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'



  },

});

export default App;