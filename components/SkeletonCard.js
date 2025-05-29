import { View, StyleSheet, Dimensions } from 'react-native';

import { MotiView } from "moti"; 
import { Easing } from "react-native-reanimated"

const screenWidth = Dimensions.get('window').width;

export default function SkeletonCard() {
    return (
        <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                loop: true,
                type: "timing",
                duration: 1000,
                delay: 300,
                easing: Easing.inOut(Easing.ease),
            }}
            style={styles.card}
            >
            <View style={styles.image} />
            <View style={styles.textBlock} />
            <View style={[styles.textBlock, { width: '80%' }]} />
        </MotiView>
    )
}

// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#081f5c",  // Fundo escuro do card
        borderRadius: 16,           // Cantos arredondados
        overflow: "hidden",         // Garante que a imagem respeite o card
        marginBottom: 20,           // Espaço entre os cards

        // Sombra para profundidade
        shadowColor: "#334eac",
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    image: {
        width: "100%",                 // Imagem ocupa toda a largura
        height: screenWidth * 0.5,     // Altura proporcional à largura da tela
        resizeMode: "cover",           // Redimensiona para cobrir a área
        backgroundColor: "#7096d1",
        borderRadius: 16,
    },
    textBlock: {
        height: 16,
        backgroundColor: "#e7f1ff",
        marginTop: 8,
        borderRadius: 8,
        width: "80%",
    },
    info: {
        padding: 16, // Espaço interno nos textos
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#ffffff",
    },
    subtitle: {
        fontSize: 16,
        color: "#bbbbbb",
        marginTop: 4,
        fontStyle: "italic",
    },
    text: {
        fontSize: 14,
        color: "#e0e0e0",
        marginTop: 6,
        textAlign: "justify", // Justifica o texto
    },
    subtitleSmall: {
        fontSize: 14,
        color: "#bbbbbb",
        marginTop: 2,
        fontStyle: "italic",
    },

});