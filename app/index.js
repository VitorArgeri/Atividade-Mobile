import { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native-web';
import axios from 'axios';

export default function Home() {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const [nome, setNome] = useState('Nicole')

    useEffect(() => {
        setTimeout(() => {
            axios.get("") // Replace with the actual API endpoint
                .then((res) => setFilms(res.data))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        }, 5000)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.lineOne}>
                    <View style={styles.iconDiv}>
                        <></>
                    </View>
                </View>

                <View style={styles.lineTwo}>
                    <Text>Olá, {nome}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }
})