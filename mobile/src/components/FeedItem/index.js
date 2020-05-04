import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { fromUnixTime, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Header,
  ImageProfile,
  ImagePost,
  Info,
  GroupInfo,
  Name,
  DateText,
  ActionPost,
} from './styles';

export default function FeedItem({ feed }) {
  const dateParsed = useMemo(() => {
    const formatedTimestamp = feed.item.date / 1000;

    const formatedDate = fromUnixTime(formatedTimestamp);

    return formatDistance(formatedDate, new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [feed.item.date]);

  return (
    <Container>
      <Header>
        <Info>
          <ImageProfile source={{ uri: feed.item.image_profile }} />
          <GroupInfo>
            <Name>{feed.item.name}</Name>
            <DateText>{dateParsed}</DateText>
          </GroupInfo>
        </Info>
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {}}>
          <Icon name="ellipsis-h" size={25} color="#999" />
        </TouchableOpacity>
      </Header>
      <ImagePost source={{ uri: feed.item.image_post }} />
      <ActionPost>
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {}}>
          <Icon name="commenting-o" size={20} color="#8f5de8" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {}}>
          <Icon name="heart-o" size={20} color="#8f5de8" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {}}>
          <Icon name="heart-o" size={20} color="#8f5de8" />
        </TouchableOpacity>
      </ActionPost>
    </Container>
  );
}
