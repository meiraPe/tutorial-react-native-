import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Card from './src/components/Card';
import Button from './src/components/Button';

export default function App() { 
  return (
    <View style={styles.container}>

      <Header/>

      <Card/>

      <Card/>

      <Card/>

      <Button/>

      <Footer/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },


  
});
