import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import styled, { useTheme } from 'styled-components';

import IconTextBox from '@components/IconTextBox';

export default function ButtonBoxes() {
  const theme = useTheme();

  const handleClickCloseButton = () => {};

  const handleClickEditButton = () => {};

  const handleClickDeleteButton = () => {};
  return (
    <Wrapper>
      <button type="button">
        <IconTextBox
          Icon={<Inventory2OutlinedIcon fontSize="small" />}
          texts={['닫기']}
          color={theme.palette.fontColor}
          spacing={0.2}
        />
      </button>
      <button type="button">
        <IconTextBox
          Icon={<EditIcon fontSize="small" />}
          texts={['편집']}
          color={theme.palette.fontColor}
          spacing={0.2}
        />
      </button>
      <button type="button">
        <IconTextBox
          Icon={<DeleteIcon fontSize="small" />}
          texts={['삭제']}
          color={theme.palette.warning}
          spacing={0.2}
        />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
