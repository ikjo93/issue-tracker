import { rest } from 'msw';

import issues from '@server/dummyData/issues';
import { filterIssues } from '@server/filterUtil';
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
const fakeIssues: IssueType[] = [...issues];

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
  const filteredIssues = filterIssues(req.url.search, fakeIssues);
  return res(ctx.status(200), ctx.json(filteredIssues));
};

const postCreateIssue: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { subject, description } = req.body;
  const newIssueId = fakeIssues[fakeIssues.length - 1].id + 1;
  const newIssueNumber = fakeIssues[fakeIssues.length - 1].number + 1;
  const newIssue = {
    id: newIssueId,
    number: newIssueNumber,
    subject,
    description,
    writer: 'happyGyu',
    profileUrl: 'https://avatars.githubusercontent.com/u/95538993?v=4',
    status: 'open',
    createdDatetime: new Date().toISOString(),
    labels: [
      {
        id: 124123,
        name: '임시라벨',
        color: 'red',
      },
    ],
    milestone: {id: 123214,
      name: '마일스톤1'},
    assignee: ['happyGyu']
  };
  fakeIssues.push(newIssue);
  return res(ctx.status(201));
};

export default function handlers() {
  return [
    rest.post('/api/join', postJoin),
    rest.post('/api/login', postLogin),
    rest.get('/api/issues', getIssues),
    rest.post('/api/createIssue', postCreateIssue),
  ];
}
