import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ExpoFont,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ParticlesBg from 'particles-bg';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <SafeAreaProvider>
          <Header
            backgroundColor={'#07B89E'}
            centerComponent={{
              text: 'Text To Speech Converter',
              style: { color: 'black', fontSize: 15, fontWeight: 700 },
            }}
          />
        <View style={styles.textContainer1}>
          <ParticlesBg type="circle" bg={true} />

          <Image
            style={styles.imageIcon}
            source={{
              uri: 'https://www.shareicon.net/data/2015/08/10/83196_chat_1024x1024.png',
            }}
          />

          <Text style={styles.text2}> Enter The Word </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ name: text });
            }}
            value={this.state.text}
            placeholder='TYPE THE WORD HERE'
          />

          <View>
            <TouchableOpacity style={styles.button} onPress={this.speak}>
              <Text style={styles.text3}> Click Here To Hear Speech </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    marginTop: 20,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    backgroundColor: 'white',
    borderRadius: '50px',
  },
  textContainer1: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },

  text2: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  
  text3: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontFamily: 'Verdana, Arial',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'purple',
    marginTop: 40,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
