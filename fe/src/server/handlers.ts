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
  const filters = parseQuery(req.url.search);
  const filteredIssues = filters.reduce(
    (tempIssues, filter) => filterIssues(filter, tempIssues),
    issues,
  );
  console.log(filters);
  const filteredByStatus = filters.includes('is%3Aclosed')
    ? filterByStatus('closed', filteredIssues)
    : filterByStatus('open', filteredIssues);

  console.log(filteredByStatus);
  return res(ctx.status(200), ctx.json(filteredByStatus));
};

const parseQuery = (query: string) => {
  if (query.slice(0, 3) !== '?q=') return [];
  const filters = query.slice(3).split('+');
  return filters;
};

const filterIssues = (target: string, originalIssues: IssueType[]) => {
  if (target.startsWith('label')) {
    const labelId = Number(target.replace('label', ''));
    return filterByLabel(labelId, originalIssues);
  }
  return originalIssues;
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
    issue: filtered,
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
