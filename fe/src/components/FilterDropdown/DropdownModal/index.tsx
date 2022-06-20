import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import mixin from '@style/mixin';
import { getCssValueByUnit } from '@util/css';

import ModalMenu from './ModalMenu';

interface IMocalContainer {
  left?: number | string;
  top?: number | string;
  unit?: string;
}

interface IModalInfo {
  title: string;
  menus: object[];
}

interface DropdownModalProps extends IMocalContainer {
  info: IModalInfo;
}

export default function DropdownModal({
  info,
  left,
  top,
  unit,
}: DropdownModalProps) {
  return (
    <>
      <ModalContainer left={left} top={top} unit={unit}>
        <ModalHeader>{info.title}</ModalHeader>
        {info.menus.map((menu) => (
          <ModalMenu key={uuid()} modalContent={menu} />
        ))}
      </ModalContainer>
      <DropdownBackdrop />
    </>
  );
}

const defaultLeft = '-2rem';
const defaultTop = '2rem';

const DropdownBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const ModalContainer = styled.div<IMocalContainer>`
  position: absolute;
  width: 15rem;
  left: ${({ left, unit }) =>
    left ? getCssValueByUnit(left, unit) : defaultLeft};
  top: ${({ top, unit }) => (top ? getCssValueByUnit(top, unit) : defaultTop)};
  z-index: 100;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  overflow: hidden;
  z-index: 2;
`;

const ModalHeader = styled.div`
  ${mixin.flexMixin({ align: 'center' })}
  background: grey;
  height: 3rem;
  padding-left: 1rem;
`;
