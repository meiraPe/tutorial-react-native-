import { View, Text, StyleSheet } from 'react-native';

export default Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Pedro Meira</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333259',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  footerText: {
    color: '#B4C4D9',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

