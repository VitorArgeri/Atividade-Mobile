import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TaxesDeclaration({ navigation }) {
  const [busca, setBusca] = useState('');

  // Função para os botões
  const handleBack = () => Alert.alert('Voltar', 'Você pressionou para voltar.');
  const handleDuvida = () => Alert.alert('Dúvida', 'Você escolheu: Receber restituição de IR');
  const handleCategoria = (categoria) => Alert.alert('Categoria', `Você abriu: ${categoria}`);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Declaração de Imposto de Renda</Text>
        <View style={{ width: 26 }} /> {/* Espaço para alinhar */}
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Campo de busca */}
        <View style={styles.buscaContainer}>
          <Ionicons name="search" size={22} color="#b9b3c6" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.inputBusca}
            placeholder="Qual é sua dúvida?"
            placeholderTextColor="#b9b3c6"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        {/* Principais dúvidas */}
        <Text style={styles.principaisTitulo}>Principais dúvidas desta categoria</Text>
        <TouchableOpacity style={styles.duvidaBox} onPress={handleDuvida}>
          <Text style={styles.duvidaLabel}>Receber restituição de IR</Text>
        </TouchableOpacity>

        {/* Categorias */}
        <Categoria
          label="IR: Informações gerais"
          onPress={() => handleCategoria('IR: Informações gerais')}
        />
        <Categoria
          label="Conta do Nubank"
          onPress={() => handleCategoria('Conta do Nubank')}
        />
        <Categoria
          label="Empréstimos"
          onPress={() => handleCategoria('Empréstimos')}
        />
        <Categoria
          label="Criptomoedas"
          onPress={() => handleCategoria('Criptomoedas')}
        />
        <Categoria
          label="Nucoin"
          onPress={() => handleCategoria('Nucoin')}
        />
        <Categoria
          label="Conta Global"
          onPress={() => handleCategoria('Conta Global')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// Componente de categoria expansível (simples, só botão)
function Categoria({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.categoriaBox} onPress={onPress}>
      <Text style={styles.categoriaLabel}>{label}</Text>
      <Ionicons name="add" size={22} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  buscaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#18181a',
    borderRadius: 30,
    marginHorizontal: 18,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 24,
  },
  inputBusca: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  principaisTitulo: {
    color: '#b9b3c6',
    fontSize: 15,
    marginHorizontal: 18,
    marginBottom: 10,
  },
  duvidaBox: {
    backgroundColor: '#18181a',
    borderRadius: 14,
    marginHorizontal: 18,
    marginBottom: 28,
    padding: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  duvidaLabel: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  categoriaBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 22,
  },
  categoriaLabel: {
    color: '#fff',
    fontSize: 17,
  },
});