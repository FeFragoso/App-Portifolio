import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const cover = require('./assets/cover.png')

export default function App() {
  return (
    <View style={s.container}>
      <ImageBackground
        source={cover}
        resizeMode='cover'
        style={s.fundo}
      >

        <Text style={s.h1}>Hello<Text style={{ color: '#D6382F' }}>.</Text>{'\n'}I am Felipe</Text>

      </ImageBackground>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    fontFamily: 'sans-serif'
  },
  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
    textShadowColor: '3.5px 3.5px #174e6d'
  }
});
