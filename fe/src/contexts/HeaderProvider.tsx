import React, { useReducer, useContext, createContext, Dispatch } from 'react';

interface IHeaderState {
  isLogin: boolean;
  profileUrl: string;
}

type Action = { type: 'LOGIN'; profileUrl: string } | { type: 'LOGOUT' };

type HeaderDispatch = Dispatch<Action>;

const initHeaderState: IHeaderState = {
  isLogin: false,
  profileUrl: '',
};

/*
  Default Page 작업용 init state
*/
const initHeaderStateForDefaultPage: IHeaderState = {
  isLogin: true,
  profileUrl: 'https://avatars.githubusercontent.com/u/95538993?v=4',
};
//

const HeaderStateContext = createContext<IHeaderState | null>(null);
const HeaderDispatchContext = createContext<HeaderDispatch | null>(null);

function reducer(state: IHeaderState, action: Action): IHeaderState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        profileUrl: action.profileUrl,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        profileUrl: '',
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  // TODO: init state 작업에 따라 바꿔서 사용하세요
  const [state, dispatch] = useReducer(reducer, initHeaderStateForDefaultPage);

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
