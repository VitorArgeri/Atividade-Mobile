import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Para usar a fonte igual ao Nubank, utilize uma fonte arredondada e bold.
// Se estiver usando Expo, pode instalar a fonte 'Montserrat Alternates Bold' ou 'Poppins Bold' para ficar parecido.
// Aqui, usarei 'Poppins-Bold' como exemplo. Troque para a fonte que preferir e garanta que ela está instalada no projeto.

export default function Prohibited() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>nu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A05BE', // Roxo Nubank
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 100,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold', // Troque para a fonte instalada no seu projeto
    letterSpacing: -8,
  },
});