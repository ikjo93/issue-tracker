import styled from 'styled-components';

import colors from '@constants/colors';
import { fontWeight, fontSize } from '@constants/fonts';

interface ILogoProps {
  page: string;
}

interface ILogoTitle {
  logoSize: string;
}

export default function Logo({ page }: ILogoProps) {
  const logoSize = page === 'login' ? fontSize.title : fontSize.large;
  return <LogoTitle logoSize={logoSize}>Issue Tracker</LogoTitle>;
}

const LogoTitle = styled.h1<ILogoTitle>`
  font-style: italic;
  color: ${colors.titleActive};
  font-weight: ${fontWeight.sBold};
  font-size: ${({ logoSize }) => logoSize};
`;
