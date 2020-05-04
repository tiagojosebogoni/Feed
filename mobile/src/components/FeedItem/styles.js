import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 15px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageProfile = styled(Image)`
  background: #9999;
  height: 36px;
  width: 36px;
  border-radius: 18px;
  margin-right: 10px;
`;

export const GroupInfo = styled.View``;

export const Name = styled.Text`
  color: #8f5de8;
`;

export const DateText = styled.Text`
  color: #8f5de8;
`;

export const ImagePost = styled(Image)`
  height: 250px;
  width: 100%;
  margin-top: 20px;
`;

export const ActionPost = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;
