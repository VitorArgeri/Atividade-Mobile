import { StyleSheet, View, Text } from 'react-native';

export default function TopicBlock({ icon, name }) {
    return (
        <View style={styles.container}>
            {icon}
            <Text style={styles.topicText}>
                {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#2E2E2E',
        width: '90%',
        marginLeft: '5%',
        borderRadius: 10,
        marginBottom: 10,
    },
    topicText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
        flexWrap: 'wrap',
        maxWidth: '80%',
    },
})