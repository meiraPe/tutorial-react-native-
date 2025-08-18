import { View, Text, StyleSheet } from 'react-native';

export default function Card() {
  return (
        <View style={styles.content}>
          <View style={styles.containerCard}>
            <View style={styles.imageCard} />
            <View style={styles.textContainer}>
              <Text style={styles.titleCard}>Título</Text>
              <Text style={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
    content: {
    flex: 4, 
    width: '100%',
    backgroundColor: '#B4C4D9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

    containerCard: {
    flexDirection: 'row', 
    backgroundColor: '#F2f2f2',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center', 
    marginBottom: 10,
    maxWidth: 350,
  },

  imageCard: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    marginRight: 15,
    borderRadius: 6,
  },

  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  titleCard: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  p: {
    textAlign: 'left',
  },
});