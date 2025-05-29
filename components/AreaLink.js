import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

export default function AreaLink({ link, icon, areaText }) {
    return (
        <View style={styles.container}>
            <Link href={link}>
                <View style={styles.circle}>
                    {icon}
                </View>
            </Link>
            <Text style={styles.areaText}>{areaText}</Text>
        </View>
    );
}
// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 100,
    },
    circle: {
        borderRadius: 100,
        backgroundColor: '#2E2E2E',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        flexWrap: 'wrap',
        maxWidth: 80,
    },
});