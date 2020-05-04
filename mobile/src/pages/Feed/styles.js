import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Text`
  color: #8f5de8;
  font-size: 28px;
  font-weight: bold;
`;

export const GroupIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  margin: 20px 0;
`;

export const Links = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const LinkText = styled.Text`
  color: #8f5de8;
  font-size: 15px;
`;

export const FeedList = styled(FlatList)`
  margin-top: 32px;
`;

export const NewPublicationButton = styled(TouchableOpacity)`
  background: #8f5de8;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 30px;
  width: 80%;
`;

export const DetailsButtonText = styled.Text`
  color: #eee;
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;
