import { ImageBackground, Image, StyleSheet, Text, View, Linking, TouchableOpacity, SafeAreaView} from 'react-native';

import LinkedIn from './assets/linkedin.svg'
import GitHub from './assets/github.svg'

export default function App() {

  return (
    <ImageBackground
      style={s.fundo}
      source={require('./assets/cover.png')}
      resizeMode='cover'
      >
      
      <SafeAreaView style={s.areaView}>

        <View style={s.header}>

          <Image
            style={s.foto}
            source={require('./assets/foto.jpg')}
          />

          <Text style={s.h1}>Hello<Text style={{ color: '#D6382F' }}>.</Text>{'\n'}I am Felipe</Text>

        </View>

        <View style={s.btnContato}>

          <View style={s.btnContato1}>

            <TouchableOpacity style={s.btnFundo} onPress={()=> { Linking.openURL('https://www.linkedin.com/in/fefragoso/') }}>

              <LinkedIn/>

            </TouchableOpacity>

            <TouchableOpacity style={s.btnFundo} onPress={()=> { Linking.openURL('https://github.com/FeFragoso') }}>

              <GitHub/>

            </TouchableOpacity>
            
          </View>

          <View style={s.btnContato2}>

            <TouchableOpacity style={s.btnFundo2} onPress={()=> { Linking.openURL('https://yourportfolio.com.br/felipefragoso/assets/Felipe-Fragoso.pdf') }}>

              <Text
                style={{
                  flex: 0.7,
                  fontSize: 20,
                  color: '#fff'
                }}
              >CURRÍCULO</Text>

              <Image
                style={{flex: 0.2, resizeMode: 'contain'}}
                source={require('./assets/download.png')}
              />

            </TouchableOpacity>

          </View>

        </View>

        <View style={s.espacoVazio}></View>

      </SafeAreaView>

    </ImageBackground>
  );
}

const s = StyleSheet.create({
  fundo: {
    flex: 1
  },

  areaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    marginTop: '5%',

    flex: 0.5,
    
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  foto: {
    width: 300,
    height: 300,

    borderRadius: 150,
    borderWidth: 5,
    borderColor: '#fff'
  },
  h1: {
    marginTop: 20,

    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    textShadowColor: '3.5px 3.5px #174e6d'
  },

  btnContato: {
    marginTop: 20,

    flex: 0.3
  },
  btnContato1: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btnContato2: {
    flex: 1,

    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btnFundo: {
    width: '30%',
    height: '50%',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 25,
    backgroundColor: '#262626'
  },
  btnFundo2: {
    width: '80%',
    height: '50%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 25,
    backgroundColor: '#262626'
  },
  espacoVazio: {
    flex: 0.1
  }
});
