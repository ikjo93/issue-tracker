import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import styled, { useTheme } from 'styled-components';

import Button from '@components/Button';
import Container from '@components/Container';
import IconTextBox from '@components/IconTextBox';

export default function IssueUtilButtons() {
  const theme = useTheme();
  return (
    <Container gap={0.5} flexInfo={{ align: 'center' }}>
      <Button
        width={7.5}
        height={2.5}
        variant="default"
        borderVariant="primary"
      >
        <ButtonContent
          Icon={<ModeEditOutlinedIcon fontSize="small" />}
          texts={['제목 편집']}
          fontSize={0.75}
          color={theme.palette.primary}
        />
      </Button>
      <Button
        width={7.5}
        height={2.5}
        variant="default"
        borderVariant="primary"
      >
        <ButtonContent
          Icon={<Inventory2OutlinedIcon fontSize="small" />}
          texts={['이슈 닫기']}
          fontSize={0.75}
          color={theme.palette.primary}
        />
      </Button>
    </Container>
  );
}

const ButtonContent = styled(IconTextBox)`
  margin: 0 auto;
`;
