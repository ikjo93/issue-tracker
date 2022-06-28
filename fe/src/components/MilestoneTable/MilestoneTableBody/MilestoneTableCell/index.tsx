import { useState } from 'react';
import styled, { css } from 'styled-components';

import MilestoneTableCellItem from '@components/MilestoneTable/MilestoneTableBody/MilestoneTableCell/MilestoneTableCellIItem';
import UpdateMilestoneBody from '@components/MilestoneTable/MilestoneTableBody/MilestoneTableCell/UpdateMilestoneBody';

export default function MilestoneTableCell({ milestone, milestonesRefetch }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <CellContainer isEditing={isEditing}>
      {isEditing ? (
        <UpdateMilestoneBody
          milestone={milestone}
          toggleIsEditing={toggleIsEditing}
          milestonesRefetch={milestonesRefetch}
        />
      ) : (
        <MilestoneTableCellItem
          milestone={milestone}
          toggleIsEditing={toggleIsEditing}
          milestonesRefetch={milestonesRefetch}
        />
      )}
    </CellContainer>
  );
}

const CellContainer = styled.div<{ isEditing: boolean }>`
  display: grid;
  padding: 0 2rem;
  min-height: 6.25rem;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  background-color: ${({ theme }) => theme.palette.contentColor};
  ${({ isEditing }) =>
    !isEditing &&
    css`
      grid-template-columns: 5fr 2fr;
      :hover {
        background-color: ${({ theme }) => theme.palette.lighterBgColor};
      }
    `}
`;
