import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import mixin from '@style/mixin';

import ModalMenu from './ModalMenu';

interface IModalInfo {
  title: string;
  menus: object[];
}

export default function DropdownModal({ info }: { info: IModalInfo }) {
  return (
    <ModalContainer>
      <ModalHeader>{info.title}</ModalHeader>
      {info.menus.map((menu) => (
        <ModalMenu key={uuid()} modalContent={menu} />
      ))}
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  width: 15rem;
  left: -2rem;
  top: 2rem;
  z-index: 100;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  ${mixin.flexMixin({ align: 'center' })}
  background: grey;
  height: 3rem;
  padding-left: 1rem;
`;
