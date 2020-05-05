import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  padding: 10px 0 0 15px;
  align-items: center;
  justify-content: center;
`;

export const GradientBorder = styled(LinearGradient).attrs({
  colors: ['#d11bc2', '#6e15bd', '#bd1531'],
})`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  overflow: hidden;
  border-color: #fff;
  border-width: 2px;
`;

export const Name = styled.Text``;
