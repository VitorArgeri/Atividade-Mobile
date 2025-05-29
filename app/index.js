import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StatusBar } from 'react-native-web';
import AreaLink from '../components/AreaLink';
import TopicBlock from '../components/TopicBlock.js';
import giftCard from '../assets/giftCard.png'; // ajuste para .jpg se necessário
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
            <StatusBar barStyle="light-content" backgroundColor="transparent" />

            <View style={styles.header}>
                <View style={styles.lineOne}>
                    <View style={styles.iconDiv}>
                        <Ionicons name="person-circle-outline" style={styles.icon} size={24} />
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
                    <Text style={styles.greetingsText}>Olá, {nome}</Text>
                </View>
            </View>

            <View style={styles.balance}>
                <View style={styles.collumnOne}>
                    <Text style={styles.balanceText}>Saldo em Conta</Text>
                    <Text style={styles.balanceText}>
                        {showEye ? 'R$1000,00' : '••••••'}
                    </Text>
                </View>
                <View style={styles.collumnTwo}>
                    <MaterialIcons name="arrow-forward-ios" size={32} color={'grey'} />
                </View>
            </View>

            <View style={styles.areaLine}>
                <AreaLink
                    icon={<Ionicons name="film-outline" />}
                    areaText="Área Pix"
                    link="/pixArea"
                />
                <AreaLink
                    icon={<Ionicons name="film-outline" />}
                    areaText="Pagar"
                    link="/pixArea"
                />
                <AreaLink
                    icon={<Ionicons name="film-outline" />}
                    areaText="Transferir"
                    link="/pixArea"
                />
                <AreaLink
                    icon={<Ionicons name="film-outline" />}
                    areaText="Depositar"
                    link="/pixArea"
                />
                <AreaLink
                    icon={<Ionicons name="film-outline" />}
                    areaText="Recarga de Celular"
                    link="/pixArea"
                />
            </View>

            <View style={styles.topicDiv}>
                <TopicBlock
                    icon={<Ionicons name="cash-outline" size={28} color="#fff" />}
                    name="Caixinhas"
                ></TopicBlock>
                <TopicBlock
                    icon={<Ionicons name="card-outline" size={28} color="#fff" />}
                    name="Meus Cartões"
                />
            </View>

            <View style={styles.line}></View>

            <View style={styles.buyDiv}>
                <Text style={styles.buyText}>Compre sem sair do app</Text>
                <Image source={giftCard} style={{ width: '100%', height: 150, resizeMode: 'contain', marginTop: 10}} />
            </View>

            <View style={styles.line}></View>


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
        backgroundColor: '#52057b',
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
    iconDiv: {
        backgroundColor: '#892cdc',
        borderRadius: 100,
        width: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50px',
    },
    lineTwo: {
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    greetingsText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    balance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },
    collumnOne: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    collumnTwo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    balanceText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    areaLine: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    topicDiv: {
        marginTop: 30,
        padding: 10,
        width: '100%',
    },
    line: {
        height: 3,
        width: '100%',
        backgroundColor: '#2E2E2E',
        marginTop: 20,
        marginBottom: 20,
    },
    buyDiv: {
        width: '80%',
        marginLeft: '10%',
    },
    buyText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})
