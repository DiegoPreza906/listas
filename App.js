import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { getLatestGames } from './Lib/metacritic';


export default function App() {

  const [games, setgames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) =>
    {
      setgames(games)
    })

  }, [])

  return (

    <View style={styles.container}>
      <ScrollView>

      {games.map((game)=>
      (
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: game.image }} />
          <View>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.descrip}>{game.description}</Text>
            <Text style={styles.score}>{game.score}</Text>
          </View>
        </View>
        
      ))}

      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  card: {
    flexDirection: 'row', // Organiza los elementos en fila
    backgroundColor: '#16537e',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center', // Alinea verticalmente la imagen y el texto
  },

  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginRight: 10, // Añade un margen a la derecha de la imagen
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white', 
  },

  descrip: {
    fontSize: 15,
    color: 'white',
  },

  score: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  }
  
});
