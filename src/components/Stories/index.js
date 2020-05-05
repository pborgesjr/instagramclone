import React from 'react';

import {Container, GradientBorder, Avatar, Name} from './styles';

export default function Stories({avatar, name}) {
  return (
    <Container>
      <GradientBorder>
        <Avatar source={{uri: avatar}} />
      </GradientBorder>
      <Name>{name}</Name>
    </Container>
  );
}
