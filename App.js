// biblioteca do css "npm install styled-components"

import React from 'react';
import {Container, Titulo} from './src/style';

import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Titulo>Styled Componentes: CSS para java script</Titulo>
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