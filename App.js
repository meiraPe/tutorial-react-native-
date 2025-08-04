import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box3}></View>
        <View style={styles.box3}></View>
      </View>
        <Text style={styles.tituloPrincipal}>Olá Mundo!</Text>
        <Text style={styles.subtitulo}>Subtitulo</Text>
        <Text style={styles.paragrafo}>Este é um paragrafo</Text>
        <Text style={styles.saibaMais}>Saiba Mais!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'arial',
  },


  tituloPrincipal: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },

  subtitulo: {
    fontSize: 18,
  },

  box1: {
    width: 400, 
    height: 100,
    backgroundColor: '#2e5a88',
    justifyContent: 'space-between',
  },

  
});
