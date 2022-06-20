import styled from 'styled-components';

import Squircle from '@components/Squircle';
import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';

type ButtonTypes = 'button' | 'submit' | 'reset';

interface ButtonProps {
  width?: number | string;
  height?: number | string;
  variant?: string;
  type?: ButtonTypes;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({
  width,
  height,
  variant = 'primary',
  type = 'button',
  onClick,
  children,
}: ButtonProps) {
  return (
    <Squircle width={width} height={height}>
      <MyButton type={type} variant={variant} onClick={onClick}>
        {children}
      </MyButton>
    </Squircle>
  );
}

const MyButton = styled.button<{ variant: string; type: ButtonTypes }>`
  color: ${colors.offWhite};
  font-size: ${fontSize.medium};
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transition: opacity 0.2s;
  background-color: ${({ theme, variant }) => theme.palette[variant]};
  :hover {
    opacity: 1;
  }
`;
