// biblioteca do css "npm install styled-components"

import React from 'react';
import { Container, Titulo, BotaoPrincipal, BotaoTexto, Nome } from './src/style';

import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Titulo cor="#FF0000">Styled Componentes: CSS para java script</Titulo>
      <Nome>Olá Mundo, por Gabriel!</Nome>
      <BotaoPrincipal onPress={ () => alert('CLICOU!')}>
        <BotaoTexto>Entrar</BotaoTexto>
      </BotaoPrincipal>
    </Container>
  );
}

/**
 *  imprementado src/style.js
 */

/* alterado 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/