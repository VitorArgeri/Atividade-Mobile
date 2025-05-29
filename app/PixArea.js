import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';

export default function PixArea() {
  // Funções dos botões
  const handleClose = () => Alert.alert('Fechar', 'Você pressionou o botão de fechar.');
  const handleHelp = () => Alert.alert('Ajuda', 'Você pressionou o botão de ajuda.');
  const handlePixAction = (acao) => Alert.alert('Pix', `Você escolheu: ${acao}`);
  const handlePreferencia = (pref) => Alert.alert('Preferência', `Você escolheu: ${pref}`);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose}>
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={handleHelp}>
          <Ionicons name="help-circle-outline" size={26} color="#b9b3c6" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Título e descrição */}
        <Text style={styles.titulo}>Área Pix</Text>
        <Text style={styles.descricao}>
          Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar nada por isso.
        </Text>

        {/* Ações Pix */}
        <View style={styles.acoesContainer}>
          <PixAction
            icon={<MaterialCommunityIcons name="bank-transfer" size={32} color="#fff" />}
            label="Transferir"
            onPress={() => handlePixAction('Transferir')}
          />
          <PixAction
            icon={<MaterialIcons name="event" size={32} color="#fff" />}
            label="Programar"
            onPress={() => handlePixAction('Programar')}
          />
          <PixAction
            icon={<MaterialCommunityIcons name="qrcode-scan" size={32} color="#fff" />}
            label="Ler QR code"
            onPress={() => handlePixAction('Ler QR code')}
          />
        </View>
        <View style={styles.acoesContainer}>
          <PixAction
            icon={<Feather name="copy" size={32} color="#fff" />}
            label="Pix Copia e Cola"
            onPress={() => handlePixAction('Pix Copia e Cola')}
          />
          <PixAction
            icon={<MaterialCommunityIcons name="cash-plus" size={32} color="#fff" />}
            label="Cobrar"
            onPress={() => handlePixAction('Cobrar')}
          />
          <PixAction
            icon={<MaterialCommunityIcons name="bank-transfer-in" size={32} color="#fff" />}
            label="Depositar"
            onPress={() => handlePixAction('Depositar')}
          />
        </View>

        {/* Preferências */}
        <View style={styles.preferenciasContainer}>
          <Text style={styles.preferenciasTitulo}>Preferências</Text>
          <TouchableOpacity style={styles.preferenciaBox} onPress={() => handlePreferencia('Registrar ou trazer chaves')}>
            <MaterialCommunityIcons name="shield-outline" size={22} color="#fff" style={{ marginRight: 12 }} />
            <Text style={styles.preferenciaLabel}>Registrar ou trazer chaves</Text>
            <Ionicons name="chevron-forward" size={22} color="#fff" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.preferenciaBox} onPress={() => handlePreferencia('Meus limites')}>
            <Feather name="sliders" size={22} color="#fff" style={{ marginRight: 12 }} />
            <Text style={styles.preferenciaLabel}>Meus limites</Text>
            <Ionicons name="chevron-forward" size={22} color="#fff" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Componente de ação Pix circular
function PixAction({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.acao} onPress={onPress}>
      <View style={styles.acaoIcon}>{icon}</View>
      <Text style={styles.acaoLabel}>{label}</Text>
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
  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 18,
    marginBottom: 8,
    marginTop: 10,
  },
  descricao: {
    color: '#b9b3c6',
    fontSize: 17,
    marginHorizontal: 18,
    marginBottom: 32,
  },
  acoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 8,
    marginBottom: 28,
  },
  acao: {
    alignItems: 'center',
    width: 100,
  },
  acaoIcon: {
    backgroundColor: '#18181a',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  acaoLabel: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  preferenciasContainer: {
    backgroundColor: '#18181a',
    borderRadius: 12,
    marginHorizontal: 0,
    marginTop: 10,
    paddingTop: 18,
    paddingBottom: 10,
    borderTopWidth: 2,
    borderTopColor: '#222',
  },
  preferenciasTitulo: {
    color: '#b9b3c6',
    fontSize: 15,
    marginHorizontal: 18,
    marginBottom: 10,
  },
  preferenciaBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  preferenciaLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
