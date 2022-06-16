import styled from 'styled-components';

import colors from '@constants/colors';
import UserIconSize from '@constants/sizes';
import { useHeaderState } from '@contexts/HeaderProvider';
import { UserIconSizeType } from '@type/types';

export default function UserIcon({ size }: { size: UserIconSizeType }) {
  const { profileUrl } = useHeaderState();

  return (
    <UserIconContainer size={size}>
      <UserIconImg imgSrc={profileUrl} />
    </UserIconContainer>
  );
}

const UserIconContainer = styled.div<{ size: UserIconSizeType }>`
  ${({ size }) => `width: ${UserIconSize[size]}`};
  ${({ size }) => `height: ${UserIconSize[size]}`};
`;

const UserIconImg = styled.img<{ imgSrc: string }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 50%;
  content: ${({ imgSrc }) => `url(${imgSrc})`};
`;
