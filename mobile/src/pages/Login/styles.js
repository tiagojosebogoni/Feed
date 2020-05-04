import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

export const LogoText = styled.Text`
  color: #8f5de8;
  font-size: 130px;
  font-weight: bold;
  margin: 70px 0;
`;

export const TextInfo = styled.Text`
  color: #666;
  padding: 0 60px;
`;

export const ActionButton = styled(TouchableOpacity)`
  background: #fc4c02;
  border-radius: 25px;
  height: 50px;
  width: 70%;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const ActionButtonText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;
