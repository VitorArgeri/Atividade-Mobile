import { useState } from 'react';
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
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function HelpCenter() {
  const [nome] = useState('Jefferson');
  const [busca, setBusca] = useState('');

  // Funções dos botões
  const handleClose = () => Alert.alert('Fechar', 'Você pressionou o botão de fechar.');
  const handleBell = () => Alert.alert('Notificações', 'Você pressionou o sino.');
  const handleAtalho = (label) => Alert.alert('Atalho', `Você escolheu: ${label}`);
  const handleDuvida = (label) => Alert.alert('Dúvida', `Você escolheu: ${label}`);
  const handlePrincipal = (label) => Alert.alert('Principal', `Você escolheu: ${label}`);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose}>
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Me Ajuda</Text>
        <TouchableOpacity onPress={handleBell}>
          <Ionicons name="notifications-outline" size={26} color="#b9b3c6" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {/* Saudação */}
        <Text style={styles.saudacao}>
          Como podemos te <Text style={styles.ajudar}>ajudar</Text> hoje, {nome}?
        </Text>
        {/* Campo de busca */}
        <View style={styles.buscaContainer}>
          <Ionicons name="search" size={22} color="#a259e6" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.inputBusca}
            placeholder="Qual é sua dúvida?"
            placeholderTextColor="#b9b3c6"
            value={busca}
            onChangeText={setBusca}
          />
        </View>
        {/* Atalhos */}
        <Text style={styles.atalhosTitulo}>Atalhos para você</Text>
        <View style={styles.atalhosRow}>
          <Atalho
            icon={<MaterialIcons name="credit-card" size={28} color="#fff" />}
            label="Pedir novo cartão"
            onPress={() => handleAtalho('Pedir novo cartão')}
          />
          <Atalho
            icon={<MaterialCommunityIcons name="shield-lock-outline" size={28} color="#fff" />}
            label="Consultar Senha"
            onPress={() => handleAtalho('Consultar Senha')}
          />
          <Atalho
            icon={<MaterialCommunityIcons name="calendar-month-outline" size={28} color="#fff" />}
            label="Vencimento da Fatura"
            onPress={() => handleAtalho('Vencimento da Fatura')}
          />
          <Atalho
            icon={<MaterialIcons name="credit-card" size={28} color="#fff" />}
            label="Ajustar limite do cartão"
            onPress={() => handleAtalho('Ajustar limite do cartão')}
          />
        </View>
        {/* Dúvidas rápidas */}
        <Text style={styles.duvidasTitulo}>Dúvidas que podem te ajudar</Text>
        <View style={styles.duvidaBoxRow}>
          <DuvidaBox
            icon={<Ionicons name="person-outline" size={24} color="#a259e6" />}
            label="Alterar e-mail cadastrado"
            onPress={() => handleDuvida('Alterar e-mail cadastrado')}
          />
          <DuvidaBox
            icon={<Ionicons name="person-outline" size={24} color="#a259e6" />}
            label="Alterar endereço de cadastrado"
            onPress={() => handleDuvida('Alterar endereço de cadastrado')}
          />
           <DuvidaBox
            icon={<Ionicons name="person-outline" size={24} color="#a259e6" />}
            label="Abrir conta para menores de 18 anos"
            onPress={() => handleDuvida('Abrir conta para menores de 18 anos')}
          />
        </View>
        {/* Principais dúvidas */}
        <Text style={styles.principaisTitulo}>Principais dúvidas sobre</Text>

        <TouchableOpacity style={styles.principalBox} onPress={() => handlePrincipal('Declaração de Imposto de Renda')}>
          <View style={styles.principalIcon}>
            <MaterialCommunityIcons name="file-document-outline" size={22} color="#fff" />
          </View>
            <View style={{ flex: 1 }}>
            <Text style={styles.principalTitle}>Declaração de Imposto de Renda</Text>
            <Text style={styles.principalDesc}>Guia completo sobre tudo que você precisa...</Text>
          </View>
        <Ionicons name="chevron-forward" size={22} color="#fff" style={styles.seta} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.principalBox} onPress={() => handlePrincipal('Cartão de crédito')}>
          <View style={styles.principalIcon}>
            <MaterialIcons name="credit-card" size={22} color="#fff" />
          </View>
             <View style={{ flex: 1 }}>
            <Text style={styles.principalTitle}>Cartão de crédito</Text>
            <Text style={styles.principalDesc}>Limite de crédito, gerenciar cartão, Ultra...</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#fff" style={styles.seta} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.principalBox} onPress={() => handlePrincipal('Empréstimo')}>
          <View style={styles.principalIcon}>
            <MaterialIcons name="credit-card" size={22} color="#fff" />
          </View>
             <View style={{ flex: 1 }}>
            <Text style={styles.principalTitle}>Empréstimos</Text>
            <Text style={styles.principalDesc}>Contratação, gerenciar empréstimos, pa...</Text>
          </View>
        <Ionicons name="chevron-forward" size={22} color="#fff" style={styles.seta} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.principalBox} onPress={() => handlePrincipal('Pix')}>
          <View style={styles.principalIcon}>
            <MaterialIcons name="credit-card" size={22} color="#fff" />
          </View>
            <View style={{ flex: 1 }}>
            <Text style={styles.principalTitle}>Pix</Text>
            <Text style={styles.principalDesc}>Pagamentos, chaves Pix, limites,  seguran...</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#fff" style={styles.seta} />
         </TouchableOpacity>

         <TouchableOpacity style={styles.principalBox} onPress={() => handlePrincipal('Conta')}>
          <View style={styles.principalIcon}>
            <MaterialIcons name="credit-card" size={22} color="#fff" />
          </View>
            <View style={{ flex: 1 }}>
            <Text style={styles.principalTitle}>Conta</Text>
            <Text style={styles.principalDesc}>Extrato da conta, portabilidade de salário...</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#fff" style={styles.seta} />
         </TouchableOpacity>

         <TouchableOpacity style={styles.principalBox} onPress={() => handlePrincipal('Dados pessoais e segurança')}>
          <View style={styles.principalIcon}>
            <MaterialIcons name="credit-card" size={22} color="#fff" />
          </View>
            <View style={{ flex: 1 }}>
            <Text style={styles.principalTitle}>Dados pessoais e segurança</Text>
            <Text style={styles.principalDesc}>Informações pessoais, endereços, senha...</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#fff" style={styles.seta} />
         </TouchableOpacity>

         <TouchableOpacity style={styles.principalBox} onPress={() => handlePrincipal('Pagamento de boletos e fatura')}>
          <View style={styles.principalIcon}>
            <MaterialIcons name="credit-card" size={22} color="#fff" />
          </View>
            <View style={{ flex: 1 }}>
            <Text style={styles.principalTitle}>Pagamento de boletos e fatura</Text>
            <Text style={styles.principalDesc}>Pagamento da fatura do cartão, pagame...</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#fff" style={styles.seta} />
         </TouchableOpacity>

         <TouchableOpacity style={styles.principalBox} onPress={() => handlePrincipal('Entrega e Reemissão de Cartão')}>
          <View style={styles.principalIcon}>
            <MaterialIcons name="credit-card" size={22} color="#fff" />
          </View>
            <View style={{ flex: 1 }}>
            <Text style={styles.principalTitle}>Entrega e Reemissão de Cartão</Text>
            <Text style={styles.principalDesc}>Saiba mais sobre Entrega e Reemissão d...</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#fff" style={styles.seta} />
         </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// Componente de atalho circular
function Atalho({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.atalho} onPress={onPress}>
      <View style={styles.atalhoIcon}>{icon}</View>
      <Text style={styles.atalhoLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

// Componente de dúvida rápida
function DuvidaBox({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.duvidaBox} onPress={onPress}>
      {icon}
      <Text style={styles.duvidaLabel}>{label}</Text>
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
  },
  saudacao: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 18,
    marginBottom: 18,
  },
  ajudar: {
    color: '#a259e6',
    fontWeight: 'bold',
  },
  buscaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2d173a',
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
  atalhosTitulo: {
    color: '#b9b3c6',
    fontSize: 15,
    marginHorizontal: 18,
    marginBottom: 10,
  },
  atalhosRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginBottom: 28,
  },
  atalho: {
    alignItems: 'center',
    width: 80,
  },
  atalhoIcon: {
    backgroundColor: '#18181a',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  atalhoLabel: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
  },
  duvidasTitulo: {
    color: '#b9b3c6',
    fontSize: 15,
    marginHorizontal: 18,
    marginBottom: 10,
  },
  duvidaBoxRow: {
    flexDirection: 'row',
    marginHorizontal: 18,
    marginBottom: 28,
    gap: 10,
  },
  duvidaBox: {
    flex: 1,
    backgroundColor: '#18181a',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginRight: 10,
  },
  duvidaLabel: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 10,
  },
  principaisTitulo: {
    color: '#b9b3c6',
    fontSize: 15,
    marginHorizontal: 18,
    marginBottom: 10,
  },
  principalBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#18181a',
    borderRadius: 12,
    marginHorizontal: 18,
    marginBottom: 12,
    padding: 14,
  },
  principalIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2d173a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  principalTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  principalDesc: {
    color: '#b9b3c6',
    fontSize: 13,
  },
  seta: {
    color: '#fff',
    fontSize: 22,
    marginLeft: 10,
  },
});