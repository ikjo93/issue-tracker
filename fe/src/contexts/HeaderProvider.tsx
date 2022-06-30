import React, { useReducer, useContext, createContext, Dispatch } from 'react';

import { MemberType } from '@type/types';

interface IHeaderState {
  isDarkMode: boolean;
  userInfo: MemberType | null;
}

type Action =
  | { type: 'STORE_USER_INFO'; userInfo: MemberType }
  | { type: 'DELETE_USER_INFO' }
  | { type: 'THEME_TOGGLE' };

type HeaderDispatch = Dispatch<Action>;

const initHeaderState: IHeaderState = {
  isDarkMode: Boolean(localStorage.getItem('isDarkMode')) || false,
  userInfo: null,
};

/*
  Default Page 작업용 init state
*/
const initHeaderStateForDefaultPage: IHeaderState = {
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode') || 'false'),
  userInfo: {
    id: 1,
    identity: 'ikjo',
    name: '익조',
    profileUrl: 'https://avatars.githubusercontent.com/u/82401504?v=4',
  },
};
//

const HeaderStateContext = createContext<IHeaderState | null>(null);
const HeaderDispatchContext = createContext<HeaderDispatch | null>(null);

function reducer(state: IHeaderState, action: Action): IHeaderState {
  switch (action.type) {
    case 'STORE_USER_INFO':
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case 'DELETE_USER_INFO':
      return {
        ...state,
        userInfo: null,
      };
    case 'THEME_TOGGLE': {
      const toggleData = !state.isDarkMode;
      localStorage.setItem('isDarkMode', JSON.stringify(toggleData));
      return {
        ...state,
        isDarkMode: toggleData,
      };
    }
    default:
      throw new Error('Unhandled action');
  }
}

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  // TODO: init state 작업에 따라 바꿔서 사용하세요
  const [state, dispatch] = useReducer(reducer, initHeaderState);

  return (
    <HeaderStateContext.Provider value={state}>
      <HeaderDispatchContext.Provider value={dispatch}>
        {children}
      </HeaderDispatchContext.Provider>
    </HeaderStateContext.Provider>
  );
}

export function useHeaderState() {
  const state = useContext(HeaderStateContext);
  if (!state) throw new Error('Cannot find HeaderProvider');
  return state;
}

export function useHeaderDispatch() {
  const dispatch = useContext(HeaderDispatchContext);
  if (!dispatch) throw new Error('Cannot find HeaderProvider');
  return dispatch;
}
