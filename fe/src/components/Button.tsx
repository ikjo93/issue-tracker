import styled, { css } from 'styled-components';

import Squircle from '@components/Squircle';
import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';
import { IPaletteOptions } from '@style/theme';

type ButtonTypes = 'button' | 'submit' | 'reset';

interface ButtonProps {
  width?: number | string;
  height?: number | string;
  variant?: keyof IPaletteOptions;
  type?: ButtonTypes;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  width,
  height,
  variant = 'primary',
  type = 'button',
  onClick,
  children,
  disabled = false,
}: ButtonProps) {
  return (
    <Squircle width={width} height={height}>
      <MyButton
        type={type}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
      >
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
  opacity: ${({ disabled }) => (disabled ? 0.5 : 0.8)};
  transition: opacity 0.2s;
  background-color: ${({ theme, variant }) => theme.palette[variant]};
  ${({ disabled }) =>
    disabled
      ? css`
          cursor: default;
        `
      : css`
          :hover {
            opacity: 1;
          }
        `}
`;
