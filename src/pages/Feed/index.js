import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import Stories from '../../components/Stories';
import LazyImage from '../../components/LazyImage';
import yourPic from '../../assets/serial.png';

import {
  FeedList,
  StoriesList,
  YourStories,
  YourImage,
  StoriesText,
  Badge,
  Post,
  Header,
  User,
  Avatar,
  Name,
  PostButtons,
  Description,
  Loading,
} from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState([]);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    setLoading(true);
    if (total && pageNumber > total) {
      return;
    }
    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`,
    );

    const data = await response.json();
    const totalItems = response.headers.get('X-Total-Count');

    setTotal(Math.ceil(totalItems / 5));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

  const handleViewableChanged = useCallback(({changed}) => {
    setViewable(changed.map(({item}) => item.id));
  }, []);

  return (
    <View>
      <FeedList>
        <FlatList
          data={feed}
          keyExtractor={(post) => String(post.id)}
          onEndReached={() => loadPage()}
          onEndReachedThreshold={0.1}
          onRefresh={refreshList}
          refreshing={refreshing}
          onViewableItemsChanged={handleViewableChanged}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 20}}
          ListHeaderComponent={
            <StoriesList>
              <YourStories>
                <YourImage source={yourPic} />
                <Badge>
                  <Icon name="plus" size={15} color="#Fff" />
                </Badge>
                <StoriesText>Seu story</StoriesText>
              </YourStories>
              {feed.map((item) => (
                <Stories
                  key={item.id}
                  avatar={item.author.avatar}
                  name={item.author.name}
                />
              ))}
            </StoriesList>
          }
          ListFooterComponent={loading && <Loading />}
          renderItem={({item}) => (
            <Post>
              <Header>
                <User>
                  <Avatar source={{uri: item.author.avatar}} />
                  <Name>{item.author.name}</Name>
                </User>
                <Icon name="dots-vertical" size={26} color="black" />
              </Header>

              <LazyImage
                shouldLoad={viewable.includes(item.id)}
                aspectRatio={item.aspectRatio}
                source={{uri: item.image}}
                smallSource={{uri: item.small}}
              />
              <PostButtons>
                <Icon name="heart-outline" color="#444" size={28} />
                <Icon2
                  name="chat-bubble-outline"
                  color="#444"
                  size={28}
                  style={{paddingLeft: 15}}
                />
                <IconSimple
                  name="paper-plane"
                  color="#444"
                  size={28}
                  style={{paddingLeft: 15}}
                />
              </PostButtons>
              <Description>
                <Name>{item.author.name}</Name>
                <Text>{item.description}</Text>
              </Description>
            </Post>
          )}
        />
      </FeedList>
    </View>
  );
}
