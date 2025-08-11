import { View, Text, StyleSheet } from 'react-native';

export default function App() { 
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text>Logo</Text>
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
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
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
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.fim}>
        <Text>Ler Mais</Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={{ color: '#f4f4f4' }}>Footer</Text>
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
    flex: 2,
    width: '100%',
    backgroundColor: '#6C63FF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  content: {
    flex: 3, // evita que estique demais
    width: '100%',
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  menu: {
    width: 40,
    height: 40,
    backgroundColor: '#ffff',
  },

  containerCard: {
    flexDirection: 'row', // imagem e texto lado a lado
    backgroundColor: '#F2f2f2',
    padding: 20,
    borderRadius: 10,
    alignItems: 'flex-start', // alinha topo da imagem com topo do texto
    marginBottom: 10,
    maxWidth: 350,
  },

  imageCard: {
    width: 50,
    height: 50,
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
    height: 50,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fim: {
    backgroundColor: '#333333',
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 10,
  }
});
