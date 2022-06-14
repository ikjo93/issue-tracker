import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';

import colors from '@/constants/colors';

import Container from './Container';

const DropdownIcon = styled(KeyboardArrowDownIcon)`
  color: ${colors.label};
  margin-right: 12px;

  :hover {
    color: ${colors.body};
  }
`;

const DropDownTitle = styled.span<{ spacing: string | undefined }>`
  margin-right: ${({ spacing }) => spacing};
`;

type PropsType = {
  title: string;
  spacing?: string;
};

// Todo: 누르면 펼쳐질 드롭다운에 대한 정보를 props로 받아서 그리기
export default function FilterDropDown({ title, spacing }: PropsType) {
  return (
    <Container flexInfo={['row', 'center', 'space-between', 'no-wrap']}>
      <DropDownTitle spacing={spacing}>{title}</DropDownTitle>
      <DropdownIcon fontSize="small" />
    </Container>
  );
}

FilterDropDown.defaultProps = {
  spacing: '0px',
};
