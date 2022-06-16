import { rest } from 'msw';

import issues from '@server/dummyData/issues';
import { IssueType } from '@type/types';

interface IUser {
  member_id: number;
  name: string;
  email: string;
  password: string;
  profile_url: string;
}

let lastUserId = 1;
const fakeUsers: IUser[] = [];

const postJoin: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  const { email, name, password } = req.body;
  const profileUrl =
    'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg';
  const userData: IUser = {
    member_id: lastUserId,
    name,
    email,
    password,
    profile_url: profileUrl,
  };
  fakeUsers.push(userData);
  lastUserId += 1;
  return res(ctx.status(201));
};

const postLogin: Parameters<typeof rest.get>[1] = async (req, res, ctx) => {
  const { email, password } = req.body;
  const user = fakeUsers.find((fUser) => fUser.email === email);
  if (!user) {
    return res(ctx.status(401));
  }
  if (user.password === password) {
    return res(
      ctx.status(201),
      ctx.cookie('refreshToken', `${user.member_id}`),
      ctx.json({ profileUrl: user.profile_url }),
    );
  }
  return res(ctx.status(401));
};


const getIssues: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const filteredIssues = filterIssues(req.url.search);
  return res(ctx.status(200), ctx.json(filteredIssues));
};

const filterIssues = (queryString) => {
  const searchParams = new URLSearchParams(queryString);
  const queryKeyList = ['writer', 'label', 'milestone', 'assignee'];
  const filteredByQueries = queryKeyList.reduce(
    (tempIssues, queryKey) =>
      filterByQuery(queryKey, searchParams.get(queryKey), tempIssues),
    issues,
  );
  const filteredByStatus =
    searchParams.get('status') === 'closed'
      ? filterByStatus('closed', filteredByQueries)
      : filterByStatus('open', filteredByQueries);
  return filteredByStatus;
};

const filterByQuery = (
  queryKey: string,
  queryValue: string,
  originalIssues: IssueType[],
) => {
  if (queryValue === null) return originalIssues;
  switch (queryKey) {
    case 'writer':
      return originalIssues.filter((issue) => issue.writer === queryValue);
    case 'label':
      return filterByLabel(Number(queryValue), originalIssues);
    case 'milestone':
      return originalIssues.filter(
        (issue) => issue.milestone.id === Number(queryValue),
      );
    case 'assignee':
      return originalIssues.filter((issue) =>
        issue.assignee.includes(queryValue),
      );
    default:
      return originalIssues;
  }
};

const filterByLabel = (targetLabelId: number, originalIssues: IssueType[]) =>
  originalIssues.filter((issue) =>
    issue.labels.some((label) => label.id === targetLabelId),
  );

const filterByStatus = (
  target: 'open' | 'closed',
  originalIssues: IssueType[],
) => {
  const filtered = originalIssues.filter((issue) => issue.status === target);
  return {
    issues: filtered,
    oppositeStatusCnt: originalIssues.length - filtered.length,
  };
};

export default function handlers() {
  return [
    rest.post('/api/join', postJoin),
    rest.post('/api/login', postLogin),
    rest.get('/api/issues', getIssues),
  ];
}
