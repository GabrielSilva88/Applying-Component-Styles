// sempre inportar biblioteca import styled from 'styled-components/native';
import styled from 'styled-components/native';

// UTILIZAR  -- `` -- 
//não utilizar "" ou ''
export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: #121212;
`;

export const Titulo = styled.Text`
color: #FFF;
font-size: 25px;
`;

export const Nome = styled.Text`
color: #FFF;
font-size: 25px;
`;

export const BotaoPrincipal = styled.TouchableOpacity`
background-color: #DDD;
padding: 5px;
border-radius: 5px;
width: 90%;
justify-content: center;
align-items: center;
`;

export const BotaoTexto = styled.Text`
color: #000;
font-size: 20px;
`;