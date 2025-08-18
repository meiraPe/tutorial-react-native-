import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
     <View style={styles.header}>
            <Text style={styles.titleHeader}>Logo</Text>
            <View style={styles.menu} />
      </View>
  );
} 

const styles = StyleSheet.create({
  header: {
    flex: 3,
    width: '100%',
    backgroundColor: '#333259',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  titleHeader: {
    color: '#B4C4D9',
    fontSize: 30,
    fontWeight: 'bold',
  },

    menu: {
    width: 60,
    height: 60,
    backgroundColor: '#B4C4D9',
  },
})