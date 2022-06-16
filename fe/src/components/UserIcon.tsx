import styled from 'styled-components';

import colors from '@constants/colors';
import UserIconSize from '@constants/sizes';
import { useHeaderState } from '@contexts/HeaderProvider';
import { UserIconSizeType } from '@type/types';

export default function UserIcon({
  size,
  imgUrl,
}: {
  size: UserIconSizeType;
  imgUrl?: string;
}) {
  //  todo: profileUrl도 사용하고 싶은 곳에서 parm으로 넘겨주는게 좋을듯
  const { profileUrl } = useHeaderState();
  return (
    <UserIconContainer size={size}>
      <UserIconImg imgSrc={imgUrl || profileUrl} />
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
  border: 1px solid ${colors.line};
  border-radius: 50%;
  content: ${({ imgSrc }) => `url(${imgSrc})`};
`;
