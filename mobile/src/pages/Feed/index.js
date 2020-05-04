import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';
import Separator from '../../components/Separator';
import FeedItem from '../../components/FeedItem';

import {
  Container,
  Header,
  Logo,
  GroupIcon,
  Content,
  Links,
  LinkText,
  NewPublicationButton,
  DetailsButtonText,
  FeedList,
} from './styles';

const Feed = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    async function loadFeeds() {
      const response = await api.get('feed');

      setFeeds(response.data);
    }

    loadFeeds();
  }, []);

  return (
    <Container>
      <Header>
        <Logo>RIDERIZE</Logo>
        <GroupIcon>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="search" size={20} color="#8f5de8" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {}}>
            <Icon name="send" size={20} color="#8f5de8" />
          </TouchableOpacity>
        </GroupIcon>
      </Header>
      <Content>
        <Links>
          <LinkText>Seguindo</LinkText>
          <LinkText>Clubes</LinkText>
          <LinkText>Marcas</LinkText>
        </Links>
        <NewPublicationButton>
          <DetailsButtonText>Criar nova publicação</DetailsButtonText>
          <Icon name="plus-circle" color="#eee" />
        </NewPublicationButton>
      </Content>
      <FeedList
        data={feeds}
        keyExtractor={(feed) => String(feed.id)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={(item) => <FeedItem feed={item} />}
      />
    </Container>
  );
};

export default Feed;
