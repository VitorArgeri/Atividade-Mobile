# Atividade-Mobile

## Instruções para instalação e execução

1. **Pré-requisitos**  
   - Node.js instalado  
   - Expo CLI instalado globalmente (`npm install -g expo-cli`)

2. **Instalação**  
   - Clone o repositório ou baixe os arquivos.
   - No terminal, navegue até a pasta do projeto.
   - Execute:  
     ```
     npm install
     ```

3. **Execução**  
   - Para rodar o app, use:  
     ```
     npx expo start
     ```
   - Escaneie o QR code com o aplicativo Expo Go no seu celular ou use um emulador.

---

## Decisões técnicas tomadas

- **React Native com Expo**: escolhido para facilitar o desenvolvimento e testes multiplataforma.
- **Componentização**: uso de componentes funcionais e FlatList para renderização dinâmica de listas.
- **Material Icons**: biblioteca de ícones para melhor visual e padronização.
- **Estilização**: uso do StyleSheet do React Native, priorizando cores escuras e roxo como cor de destaque.

---

## Dificuldades encontradas e como foram resolvidas

- **Alinhamento de elementos**: Ajustes finos em flexbox e margens para garantir responsividade e visual agradável.
- **Ícones e cores**: Garantir que todos os ícones e textos seguissem o padrão de cor definido no layout.
- **Separadores de lista**: Para ocupar 100% da largura, foi necessário garantir que o componente da linha estivesse fora do bloco de texto e dentro do container correto.
- **Áreas clicáveis**: Para tornar textos e ícones realmente clicáveis, foi preciso envolver todo o conteúdo em `TouchableOpacity` e ajustar o estilo.

---

## Sugestões de melhorias futuras

- **Internacionalização (i18n)** para suportar múltiplos idiomas.
- **Acessibilidade**: adicionar suporte a leitores de tela e melhorar contraste.
- **Navegação real**: implementar navegação entre telas usando React Navigation.
- **Feedback visual**: adicionar animações ou feedbacks ao clicar nos botões.
- **Testes automatizados**: criar testes unitários e de interface.
- **Integração com backend**: conectar as opções a funcionalidades reais e dados dinâmicos.

---