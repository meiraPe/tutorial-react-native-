import { View, Text, StyleSheet } from 'react-native';

export default function VerMais() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Ver Mais</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#B4C4D9',
  },

  button: {
    backgroundColor: '#54678C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 100, 
    marginBottom: 10,
  }
});