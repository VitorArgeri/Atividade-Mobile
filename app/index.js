import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native-web';
import axios from 'axios';
import FilmCard from '../components/FilmCard';
import SkeletonCard from '../components/SkeletonCard';

export default function Home() {
    // Cria um estado chamado Films para guardar a lista de Filmes
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            axios.get("https://ghibliapi.vercel.app/films")
                .then((res) => setFilms(res.data))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        }, 5000)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                🎥 Filmes Estúdio Ghibli
            </Text>
            {loading ? (
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={(item) => item.toString()}
                    renderItem={() => <SkeletonCard />}
                    contentContainerStyle={styles.list}
                />
            ) : (
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmCard film={item} />}
                    contentContainerStyle={styles.list}
                />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: "center",
        marginVertical: 16,
    },
    list: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    }

})