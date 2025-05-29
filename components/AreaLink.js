import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

export default function AreaLink({ link, icon, areaText }) {
    return (
        <View style={styles.container}>
            <Link href={link}>
                <View style={styles.circle}>
                    <Image
                        source={icon}
                        style={{
                            width: screenWidth * 0.15,
                            height: screenWidth * 0.15,
                            borderRadius: screenWidth * 0.075,
                        }}
                    />
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