import { rest } from 'msw';

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
      ctx.cookie('refresh-token', `r-${user.member_id}`),
      ctx.set('access-token', `a-${user.member_id}`),
      ctx.json({
        profileUrl: user.profile_url,
        status: 'OK',
        message: '로그인이 정상적으로 처리되었습니다.',
      }),
    );
  }
  return res(ctx.status(401));
};

const getGithubLogin: Parameters<typeof rest.get>[1] = async (_, res, ctx) => {
  const user = fakeUsers[0];
  return res(
    ctx.cookie('refresh-token', `r-${user.member_id}`),
    ctx.set('access-token', `a-${user.member_id}`),
    ctx.json({
      profileUrl: user.profile_url,
      status: 'OK',
      message: '로그인이 정상적으로 처리되었습니다.',
    }),
  );
};

export default function loginHandlers() {
  return [
    rest.post('/api/join', postJoin),
    rest.post('/api/login', postLogin),
    rest.get('/api/github-login', getGithubLogin),
  ];
}
