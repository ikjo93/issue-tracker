import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styled, { useTheme } from 'styled-components';

import Container from '@components/Container';
import IconTextBox from '@components/IconTextBox';
import Squircle from '@components/Squircle';
import { fontSize } from '@constants/fonts';
import mixin from '@style/mixin';

export default function IssueInfo() {
  const theme = useTheme();
  return (
    <Container>
      <Container flexInfo={{ align: 'center' }} gap={1}>
        <IssueTitle>FE이슈트래커 디자인 시스템 구현</IssueTitle>
        <IssueNumber>#2</IssueNumber>
      </Container>
      <Container flexInfo={{ align: 'center' }} gap={0.5} mt="1.25rem">
        <IssueStatusBadge
          color={theme.palette.primary}
          backgroundColor={theme.palette.primaryBgColor}
          borderLineColor={theme.palette.primary}
          width={6.25}
          height={2.5}
        >
          <IconTextBox
            Icon={<ErrorOutlineIcon fontSize="small" />}
            texts={['열린 이슈']}
            spacing={0.375}
            fontSize={0.625}
          />
        </IssueStatusBadge>
        <IconTextBox
          texts={[
            '이 이슈가 23분 전에 Oni님에 의해 열렸습니다',
            '·',
            '코멘트 2개',
          ]}
          spacing={0.5}
          color={theme.palette.placeholder}
          fontSize={1.125}
        />
      </Container>
    </Container>
  );
}

const IssueTitle = styled.h1`
  font-size: ${fontSize.large};
`;

const IssueNumber = styled.span`
  font-size: ${fontSize.large};
  color: ${({ theme }) => theme.palette.placeholder};
`;

const IssueStatusBadge = styled(Squircle)`
  ${mixin.flexMixin({ justify: 'center', align: 'center' })}
`;
