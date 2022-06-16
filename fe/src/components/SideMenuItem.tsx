import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import styled from 'styled-components';

import Container from '@components/Container';

export default function SideMenuItem({
  type,
}): React.ReactElement<{ type: string }> {
  return (
    <Container
      flexInfo={{ direction: 'row', align: 'center', justify: 'space-between' }}
      padding="3rem 2rem"
    >
      <TypeTitle>{type}</TypeTitle>
      <AddIcon />
    </Container>
  );
}

const TypeTitle = styled.h6``;
