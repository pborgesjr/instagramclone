import styled from 'styled-components/native';

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
  margin-right: 5px;
`;

export const Description = styled.View`
  padding: 15px;
  flex-direction: row;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;

export const FeedList = styled.View``;

export const StoriesList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  border-bottom-width: 1px;
  padding-bottom: 7px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const YourStories = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
`;

export const YourImage = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 33px;
`;

export const StoriesText = styled.Text`
  margin-top: 3px;
`;

export const Badge = styled.View`
  position: absolute;
  bottom: 18px;
  right: 0;
  background: #1563bd;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border-color: #fff;
  border-width: 2px;
`;

export const PostButtons = styled.View`
  padding: 10px 15px 0;
  flex-direction: row;
`;
