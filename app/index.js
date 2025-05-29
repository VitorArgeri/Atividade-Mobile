import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function Home() {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const [nome, setNome] = useState('Jefferson')
    const [showEye, setShowEye] = useState(false)

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
                        <Ionicons name="person-circle-outline" />
                    </View>
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => setShowEye(!showEye)}>
                            <Ionicons
                                name={showEye ? "eye-outline" : "eye-off-outline"}
                                size={32} 
                                style={styles.icon}
                                />
                        </TouchableOpacity>

                        <Ionicons name="help-circle-outline" style={styles.icon} size={32} />
                        <Ionicons name="checkmark-circle-outline" style={styles.icon} size={32} />
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
    },
    header: {
        padding: 20,
        backgroundColor: '#9400d3',
        flexDirection: 'column',
        alignItems: 'center',
    },
    lineOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    iconDiv: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nav: {
        flexDirection: 'row',
        gap: 20,
    },
    icon: {
        color: '#fff',
    },
})
