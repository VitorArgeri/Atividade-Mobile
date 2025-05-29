import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StatusBar } from 'react-native-web';
import AreaLink from '../components/AreaLink';
import TopicBlock from '../components/TopicBlock.js';
import giftCard from '../assets/giftCard.png';
import indiqueImg from '../assets/indiqueImg.png';
import portabilidadeImg from '../assets/portabilidadeImg.png';
import LoadingScreen from './enterPage';
import { Link, useRouter } from 'expo-router';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [loginShown, setLoginShown] = useState(false); const [nome] = useState('Jefferson')
    const [showEye, setShowEye] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [agencia] = useState('Nubank');

    const router = useRouter();
    useEffect(() => {
        if (!loginShown && loading) {
            const timer = setTimeout(() => {
                setLoading(false);
                setLoginShown(true);
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, [loginShown, loading]);

    if (loading && !loginShown) {
        return <LoadingScreen />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" />

            <ScrollView style={{ minHeight: '100vh' }} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.lineOne}>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <View style={styles.iconDiv}>
                                <Ionicons name="person-circle-outline" style={styles.icon} size={24} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.nav}>
                            <TouchableOpacity onPress={() => setShowEye(!showEye)}>
                                <Ionicons
                                    name={showEye ? "eye-outline" : "eye-off-outline"}
                                    size={32}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push('/HelpCenter')}>
                                <Ionicons name="help-circle-outline" style={styles.icon} size={32} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push('/protectionCenter')}>
                                <Ionicons name="checkmark-circle-outline" style={styles.icon} size={32} />
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.lineTwo}>
                        <Text style={styles.greetingsText}>Olá, {nome}</Text>
                    </View>
                </View>

                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={styles.modalOverlay} />
                    </TouchableWithoutFeedback>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ alignSelf: 'flex-start' }}>
                                <Ionicons name="close" size={28} color="#fff" />
                            </TouchableOpacity>
                            <View style={styles.modalHeaderCollumn}>
                                <View style={styles.modalHeaderCollumn}>
                                    <Ionicons name="person-circle-outline" style={styles.icon} size={32} />
                                    <Link href="/HelpCenter" asChild>
                                        <TouchableOpacity>
                                            <MaterialCommunityIcons name="hexagon-outline" size={32} color="white" style={{ marginHorizontal: 10 }} />
                                        </TouchableOpacity>
                                    </Link>
                                    <Ionicons name="notifications-outline" style={styles.icon} size={32} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.personDiv}>
                            <View style={styles.personDivCollumn}>
                                <View style={styles.profilePictureDiv}>
                                    <MaterialIcons name="add-photo-alternate" style={styles.icon} size={32} />
                                </View>
                                <View style={styles.profileDivCollumn}>
                                    <Text style={styles.nameTitle}>{nome}</Text>
                                    <Text style={styles.accountThings}>Agência: {agencia} - Conta: 12345</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, backgroundColor: '#892dcd', padding: 10, borderRadius: 10, alignContent: 'center', flexDirection: 'row', gap: 10, marginBottom: 20 }}>
                            <Ionicons name="help-circle-outline" style={styles.icon} size={32} />
                            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', alignSelf: 'center' }}>
                                Essa tela mudou <Text style={{ textDecorationLine: 'underline', color: '#fff' }}>Entenda Aqui</Text>
                            </Text>
                        </View>
                        <View style={styles.line}></View>
                        <Text style={{ color: 'grey', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                            Outras Contas
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <View style={{
                                backgroundColor: '#892cdc',
                                borderRadius: 50,
                                width: 50,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: 16,
                            }}>
                                <Ionicons name="add" size={28} color="#fff" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Abrir Conta PJ</Text>
                                <Text style={{ color: 'grey', fontSize: 14 }}>Crie a conta da sua empresa</Text>
                            </View>
                            <TouchableOpacity style={{
                                backgroundColor: '#892cdc',
                                borderRadius: 8,
                                paddingVertical: 8,
                                paddingHorizontal: 18,
                                marginLeft: 10,
                            }}>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Conheça</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.topicDiv}>
                            <TopicBlock
                                icon={<MaterialCommunityIcons name="bank-outline" size={28} color="#fff" />}
                                name="Open Finance"
                            />
                            <TopicBlock
                                icon={<Ionicons name="person-outline" size={28} color="#fff" />}
                                name="Convidar Amigos"
                            />
                        </View>
                        <View style={styles.line}></View>
                        <View style={{
                            backgroundColor: '#2E2E2E',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 30,
                            paddingVertical: 16,
                            marginHorizontal: 20,
                            marginTop: 10,
                            marginBottom: 30,
                        }}>
                            <MaterialIcons name="logout" size={28} color="#fff" style={{ marginRight: 12, transform: [{ rotate: '180deg' }] }} />
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Sair do Aplicativo</Text>
                        </View>
                    </View>
                </Modal>

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
                        icon={<Ionicons name="cash-outline" size={28} color="#fff" />}
                        areaText="Área Pix"
                        link="/PixArea"
                    />
                    <AreaLink
                        icon={<Ionicons name="qr-code-outline" size={28} color="#fff" />}
                        areaText="Pagar"
                        link="/"
                    />
                    <AreaLink
                        icon={<Ionicons name="swap-horizontal-outline" size={28} color="#fff" />}
                        areaText="Transferir"
                        link="/"
                    />
                    <AreaLink
                        icon={<Ionicons name="download-outline" size={28} color="#fff" />}
                        areaText="Depositar"
                        link="/"
                    />
                    <AreaLink
                        icon={<Ionicons name="phone-portrait-outline" size={28} color="#fff" />}
                        areaText="Recarga de Celular"
                        link="/"
                    />
                </View>

                <View style={styles.topicDiv}>
                    <TopicBlock
                        icon={<Ionicons name="cash-outline" size={28} color="#fff" />}
                        name="Caixinhas"
                    />
                    <TopicBlock
                        icon={<Ionicons name="card-outline" size={28} color="#fff" />}
                        name="Meus Cartões"
                    />
                </View>

                <View style={styles.line}></View>

                <View style={styles.buyDiv}>
                    <Text style={styles.buyText}>Compre sem sair do app</Text>
                    <Image source={giftCard} style={{ width: '100%', height: 150, resizeMode: 'contain', marginTop: 10 }} />
                </View>

                <View style={styles.line}></View>

                <View style={styles.knowMore}>
                    <Text style={styles.title}>Descubra mais</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginVertical: 30, paddingLeft: 20 }}
                    >
                        <View style={{
                            backgroundColor: '#2E2E2E',
                            borderRadius: 18,
                            width: 260,
                            marginRight: 16,
                            overflow: 'hidden',
                            flexDirection: 'column'
                        }}>
                            <Image
                                source={indiqueImg}
                                style={{ width: '100%', height: 110, resizeMode: 'cover' }}
                            />
                            <View style={{ padding: 16 }}>
                                <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>
                                    Indique o Nu pros Amigos
                                </Text>
                                <Text style={{ color: 'grey', fontSize: 13, marginTop: 6 }}>
                                    Espalhe como é simples estar no controle
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    paddingVertical: 8,
                                    paddingHorizontal: 24,
                                    alignSelf: 'flex-start',
                                    marginLeft: 16,
                                    marginBottom: 16,
                                    marginTop: 4,
                                    backgroundColor: 'purple'
                                }}
                                activeOpacity={0.7}
                            >
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Conhecer</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            backgroundColor: '#2E2E2E',
                            borderRadius: 18,
                            width: 260,
                            marginRight: 16,
                            overflow: 'hidden',
                            flexDirection: 'column'
                        }}>
                            <Image
                                source={portabilidadeImg}
                                style={{ width: '100%', height: 110, resizeMode: 'cover' }}
                            />
                            <View style={{ padding: 16 }}>
                                <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>
                                    Portabilidade de Salário
                                </Text>
                                <Text style={{ color: 'grey', fontSize: 13, marginTop: 6 }}>
                                    Liberdade é escolher onde receber seu dinheiro
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    paddingVertical: 8,
                                    paddingHorizontal: 24,
                                    alignSelf: 'flex-start',
                                    marginLeft: 16,
                                    marginBottom: 16,
                                    marginTop: 4,
                                    backgroundColor: 'purple'
                                }}
                                activeOpacity={0.7}
                            >
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Conhecer</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 24,
                    marginBottom: 16,
                }}>
                    <MaterialCommunityIcons name="heart-outline" size={24} color="#892cdc" />
                    <Text style={{ color: '#892cdc', fontWeight: 'bold', fontSize: 16, marginLeft: 8 }}>
                        Avalie esta tela
                    </Text>
                </View>

            </ScrollView>
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
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: '10%',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000',
        padding: 24,
        minHeight: '60%',

    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalHeaderCollumn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    personDiv: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    profilePictureDiv: {
        backgroundColor: '#222',
        borderRadius: 100,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    personDivCollumn: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    accountThings: {
        color: 'grey',
        fontSize: 14,
        marginTop: 5,
    },
})
