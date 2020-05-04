import React from 'react';

import {
  Container,
  Content,
  LogoText,
  TextInfo,
  ActionButton,
  ActionButtonText,
} from './styles';

const Login = ({ navigation }) => {
  return (
    <Container>
      <LogoText>R</LogoText>
      <TextInfo>
        Para ter acesso a todas as funcionalidades recomendamos que conecte seu
        strava!
      </TextInfo>

      <ActionButton
        onPress={() => {
          navigation.navigate('Feed');
        }}
      >
        <ActionButtonText>Conectar Strava</ActionButtonText>
      </ActionButton>

      <TextInfo>Outras opções de Login</TextInfo>
      <Content />
    </Container>
  );
};

export default Login;
