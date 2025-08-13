import { View, Text, StyleSheet } from 'react-native';

export default function App() { 
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titleHeader}>Logo</Text>
        <View style={styles.menu} />
      </View>

      {/* Card 1 */}
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

      {/* Card 2 */}
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

      {/* Card 3 */}
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

        <View style={styles.lerMais}>
          <Text style={{ color: '#B4C4D9', fontSize: 18, }}>Ler Mais</Text>
        </View>
      
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={{ color: '#f4f4f4', fontWeight: 'bold', fontSize: 14, }}>Footer</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

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

  content: {
    flex: 4, 
    width: '100%',
    backgroundColor: '#B4C4D9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  menu: {
    width: 60,
    height: 60,
    backgroundColor: '#B4C4D9',
  },

  containerCard: {
    flexDirection: 'row', 
    backgroundColor: '#F2f2f2',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center', 
    marginBottom: 30,
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

  footer: {
    flex: 2,
    width: '100%',
    height: 50,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  lerMais: {
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
