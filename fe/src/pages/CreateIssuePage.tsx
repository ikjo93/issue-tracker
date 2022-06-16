import styled from 'styled-components';

import Header from '@components/Header';
import TitleBar from '@components/TitleBar';

const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default function CreateIssuePage() {
  return (
    <>
      <Header />
      <Body>
        <TitleBar title="새로운 이슈 작성" />
      </Body>
    </>
  );
}
