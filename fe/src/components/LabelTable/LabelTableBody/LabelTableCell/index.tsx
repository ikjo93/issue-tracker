import styled from 'styled-components';

import mixin from '@style/mixin';

export default function LabelTableCell() {
  return (
    <CellContainer>
      <LabelInfoContainer>
        <span>무무야야호호z</span>
      </LabelInfoContainer>
      <AssigneeIconContainer>
        <span>여기 아마 삭제버튼zzz </span>
      </AssigneeIconContainer>
    </CellContainer>
  );
}

const CellContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding: 0 2rem;
  height: 6.25rem;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  background-color: ${({ theme }) => theme.palette.contentColor};
  :hover {
    background-color: ${({ theme }) => theme.palette.lighterBgColor};
  }
`;

const LabelInfoContainer = styled.div`
  ${mixin.flexMixin({ align: 'center' })};
`;

const AssigneeIconContainer = styled.div`
  ${mixin.flexMixin({ align: 'center' })};
`;
