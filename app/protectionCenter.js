import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const options = [
  {
    id: '1',
    icon: 'umbrella',
    title: 'Seguros',
    description: 'Proteção para tudo que importa a partir de R$ 10,00 por mês',
  },
  {
    id: '2',
    icon: 'settings',
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

const otherOptions = [{
  id: '4',
  title: 'O que fazer caso roubem meu celular?'
},
{
  id: '5',
  title: 'NuPay: Pagamentos mais seguros',
}
];

export default function ProtectionCenter() {

  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          activeOpacity={0.7}
          onPress={() => router.push('/')}
        >
          <MaterialIcons name="chevron-left" size={24} color="#fff" />
          <Text style={styles.headerTitle}>Central de Proteção</Text>
        </TouchableOpacity>
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
            <TouchableOpacity
              style={styles.blockSuasProtecoes}
              activeOpacity={0.7}
              onPress={() => { /* ação para Suas proteções */ }}
            >
              <Text style={styles.suasProtecoesText}>Suas proteções</Text>
              <MaterialIcons name="arrow-forward" size={19} color="#ae3fd9" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line}></View>
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

      <View style={styles.flatListDiv}>
        <Text style={styles.flatListTitle}>Mais opções de proteção</Text>
        <FlatList
          data={options}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity style={styles.option}>
                <MaterialIcons name={item.icon} size={28} color="#fff" />
                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>{item.title}</Text>
                  <Text style={styles.optionDescription}>{item.description}</Text>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#ccc" />
              </TouchableOpacity>
              <View style={styles.securityLine}></View>
            </>
          )}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.otherOptionsDiv}>
        <Text style={styles.flatListTitle}>Mais sobre segurança</Text>
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>O que fazer caso roubem meu celular?</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>NuPay: Pagamentos mais seguros</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
      {/* NOVO BLOCO FINAL */}
      <View style={styles.bottomDiv}>
        <TouchableOpacity
          style={styles.bottomRow}
          activeOpacity={0.7}
          onPress={() => { /* ação para Mais artigos */ }}
        >
          <Text style={styles.bottomPurpleText}>Mais artigos</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#ae3fd9" style={{ marginLeft: 6 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomCenterRow}
          activeOpacity={0.7}
          onPress={() => { /* ação para Avalie essa tela */ }}
        >
          <MaterialIcons name="favorite" size={22} color="#ae3fd9" />
          <Text style={styles.bottomCenterText}>Avalie essa tela</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
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
    fontWeight: '300',
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
    backgroundColor: '#701198',
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
    color: '#6a6a6a',
    marginTop: 4,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#2E2E2E',
    marginTop: 20,
    marginBottom: 20,
  },
  flatListDiv: {
    backgroundColor: '#000',
    padding: 16,
    width: '100%',
  },
  flatListTitle: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  securityLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#2E2E2E',
    marginTop: 0,
    marginBottom: 0,
  },
  otherOptionsDiv: {
    backgroundColor: '#000',
    padding: 16,
    marginBottom: 20,
    width: '100%',
  },
  otherOptionsTitle: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  bottomDiv: {
    backgroundColor: '#000',
    width: '100%',
    paddingVertical: 22,
    paddingHorizontal: 0,
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    alignItems: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 18,
  },
  bottomPurpleText: {
    color: '#ae3fd9',
    fontSize: 16,
  },
  bottomCenterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  bottomCenterText: {
    color: '#ae3fd9',
    fontSize: 16,
    marginLeft: 6,
  },
});