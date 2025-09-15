import {View, Text, StyleSheet} from 'react-native';
//import { Image } from 'expo-image';

export default function CardUser({ name, email }) {

  console.log('teste card');
    return (
        <View style={styles.card}>
           {/*  <Image 
              style={styles.image}
              source={avatar}
            />
                 */}
            <View style={styles.name}>
                <Text style={styles.titulo_card}>{name}</Text>
                <Text>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  card: {
    width: '90%',
    backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  titulo_card: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
})