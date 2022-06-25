import axios from 'axios';
import {
  useState,
  useContext,
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  Dispatch,
} from 'react';

import { IssueType } from '@type/types';

type IssueDispatch = Dispatch<SetStateAction<IssueType>>;

const IssueStateContext = createContext<IssueType | null>(null);
const IssueDispatchContext = createContext<IssueDispatch | null>(null);

interface IIssueProvider {
  issueId: number;
  children: ReactNode;
}

export function IssueProvider({ issueId, children }: IIssueProvider) {
  const [issue, setIssue] = useState(initIssue);

  useEffect(() => {
    (async () => {
      const { data: issueData } = await axios.get(`/api/issue/${issueId}`);
      setIssue(issueData);
    })();
  }, []);

  return (
    <IssueStateContext.Provider value={issue}>
      <IssueDispatchContext.Provider value={setIssue}>
        {children}
      </IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
}

const initIssue: IssueType = {
  id: 0,
  status: '',
  subject: '',
  comments: [],
  writer: '',
  profileUrl: '',
  createdDateTime: '',
  milestone: {
    id: 0,
    subject: '',
    description: '',
  },
  assignees: [],
  labels: [],
};

export function useIssueState() {
  const issueState = useContext(IssueStateContext);
  if (!issueState) throw new Error('Cannot find IssueProvider');
  return issueState;
}

export function useSetIssue() {
  const setIssue = useContext(IssueDispatchContext);
  if (!setIssue) throw new Error('Cannot find IssueProvider');
  return setIssue;
}
