import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function FilmCard({ film }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: film.image }} style={styles.image} />

            <View style={styles.info}>
                <Text style={styles.title}>{film.title ?? "Título não Disponível"}</Text>
                <Text style={styles.subtitle}>{film.original_title ?? "Título Original não Disponível"}</Text>
                <Text style={styles.subtitleSmall}>{film.original_title_romanised ?? "Título Original Romazinado não Disponível"}</Text>
                <Text style={styles.text}>{film.description ?? "Descrição não Disponível"}</Text>
                <Text style={styles.text}>🎬 Diretor: {film.director ?? "Diretor não Informado"}</Text>
                <Text style={styles.text}>🎥 Produtor: {film.producer ?? "Produtor não Informado"}</Text>
                <Text style={styles.text}>📅 Lançamento: {film.release_date ?? "Não Informado"}</Text>
                <Text style={styles.text}>⏱️ Duração: {film.running_time ?? "Não Informado"} min</Text>
                <Text style={styles.text}>⭐ Avaliação: {film.rt_score ?? "Não Informado"}/100</Text>
            </View>

        </View>
    );
}
// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1f1f1f",  // Fundo escuro do card
        borderRadius: 16,           // Cantos arredondados
        overflow: "hidden",         // Garante que a imagem respeite o card
        marginBottom: 20,           // Espaço entre os cards

        // Sombra para profundidade
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    image: {
        width: "100%",                 // Imagem ocupa toda a largura
        height: screenWidth * 0.6,     // Altura proporcional à largura da tela
        resizeMode: "cover",           // Redimensiona para cobrir a área
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