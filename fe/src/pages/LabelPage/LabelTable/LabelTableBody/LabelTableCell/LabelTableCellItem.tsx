import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import styled, { useTheme } from 'styled-components';

import IconTextBox from '@components/data-display/IconTextBox';
import Label from '@components/data-display/Label';
import AlertDialog from '@components/util/AlertDialog';
import { useLabelContext } from '@contexts/LabelProvider';
import mixin from '@style/mixin';

export default function LabelTableCellItem({ label, toggleIsEditing }) {
  const theme = useTheme();
  const { refetch: labelAxiosRefetch } = useLabelContext();

  const handleClickDeleteYes = async () => {
    await axios.delete(`/api/labels/${label.id}`);
    labelAxiosRefetch();
  };

  return (
    <>
      <LabelInfoContainer>
        <Label
          text={label.name}
          bgColor={label.color}
          darkText={label.darkText}
        />
        <LabelDescription>{label.description}</LabelDescription>
      </LabelInfoContainer>
      <AssigneeIconContainer>
        <button type="button" onClick={toggleIsEditing}>
          <IconTextBox
            Icon={<EditIcon fontSize="small" />}
            texts={['편집']}
            color={theme.palette.fontColor}
          />
        </button>
        <AlertDialog
          sx={{
            backgroundColor: theme.palette.bgColor,
            color: theme.palette.fontColor,
          }}
          onClickYes={handleClickDeleteYes}
        >
          <IconTextBox
            Icon={<DeleteIcon fontSize="small" />}
            texts={['삭제']}
            color={theme.palette.warning}
          />
        </AlertDialog>
      </AssigneeIconContainer>
    </>
  );
}

const LabelInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  align-items: center;
`;

const LabelDescription = styled.span`
  opacity: 0.5;
`;

const AssigneeIconContainer = styled.div`
  ${mixin.flexMixin({ align: 'center' })};
  gap: 1rem;
`;
