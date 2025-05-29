import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const options = [
  {
    id: '1',
    icon: 'security',
    title: 'Seguros',
    description: 'Proteção para tudo que importa a partir de R$ 10,00 por mês',
  },
  {
    id: '2',
    icon: 'lock',
    title: 'Ajustes de segurança',
    description: 'Senhas e acessos',
  },
  {
    id: '3',
    icon: 'report-problem',
    title: 'Configurar Pix',
    description: 'Limites e contatos de confiança',
  },
];

export default function ProtectionCenter() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="#820ad1" />
        <Text style={styles.headerTitle}>Central de Proteção</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons name="shield" size={64} color="#820ad1" />
      </View>
      <Text style={styles.title}>Sua segurança em primeiro lugar</Text>
      <Text style={styles.subtitle}>
        Aqui você encontra recursos e dicas para proteger sua conta e seus dados.
      </Text>
      <FlatList
        data={options}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.option}>
            <MaterialIcons name={item.icon} size={28} color="#820ad1" />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>{item.title}</Text>
              <Text style={styles.optionDescription}>{item.description}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#ccc" />
          </TouchableOpacity>
        )}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#820ad1',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  list: {
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});