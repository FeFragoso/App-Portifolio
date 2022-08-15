import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={s.container}>
      <ImageBackground
        source={require('./assets/cover.png')}
        resizeMode='cover'
        style={s.fundo}
      >

        <View style={s.header}>
          <Image
            source={require('./assets/foto.jpg')}
            style={s.foto}
          />

          <Text style={s.h1}>Hello<Text style={{ color: '#D6382F' }}>.</Text>{'\n'}I am Felipe</Text>
        </View>

      </ImageBackground>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  fundo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    flex: 0.7,
    justifyContent: 'space-around',
    alignItems: 'center',

    width: '100%',

    borderWidth: 5,
    borderColor: '#fff'
  },
  foto: {
    width: 300,
    height: 300,

    borderRadius: 150,
    borderWidth: 5,
    borderColor: '#fff'
  },
  h1: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
    textShadowColor: '3.5px 3.5px #174e6d'
  }
});
