import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const options = [
  {
    id: '1',
    icon: 'umbrella',
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
    icon: 'pix',
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

      {/* Bloco preto personalizado */}
      <View style={styles.protectionBlock}>
        <View style={styles.blockTop}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="security" size={28} color="#820ad1" />
          </View>
          <View style={styles.blockTopRight}>
            <Text style={styles.blockTopText}>
              Para ter mais segurança, ative as camadas de proteção
            </Text>
            <View style={styles.blockSuasProtecoes}>
              <Text style={styles.suasProtecoesText}>Suas proteções</Text>
              <MaterialIcons name="chevron-right" size={22} color="#ae3fd9" />
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.blockBottom}>
          <View style={{ flex: 1 }}>
            <Text style={styles.modoRuaTitle}>Modo Rua</Text>
            <Text style={styles.modoRuaDesc}>
              Ative para proteger suas transações com biometria facial.
            </Text>
          </View>
          <TouchableOpacity style={styles.ativarButton}>
            <Text style={styles.ativarButtonText}>Ativar</Text>
          </TouchableOpacity>
        </View>
      </View>
   
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
    backgroundColor: '#696969',
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
    marginLeft: 16,
    color: '#fff',
  },
  // Bloco preto personalizado
  protectionBlock: {
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 18,
    marginBottom: 26,
    width: '85%',
    marginLeft: '7.5%',
  },
  blockTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  blockTopRight: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  blockTopText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  blockSuasProtecoes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  suasProtecoesText: {
    color: '#ae3fd9',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#222',
    opacity: 0.2,
    marginVertical: 14,
    borderRadius: 1,
  },
  blockBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modoRuaTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  modoRuaDesc: {
    color: '#ccc',
    fontSize: 13,
    marginRight: 10,
  },
  ativarButton: {
    backgroundColor: '#820ad1',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 22,
    alignSelf: 'flex-end',
  },
  ativarButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
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
    backgroundColor: '#000',
    padding: 16,
    marginBottom: 1,
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
  },
  optionTitle: {
    fontSize: 16,
    color: '#fff',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});