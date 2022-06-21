import { rest } from 'msw';

import issues from '@server/dummyData/issues';
import { filterIssues } from '@server/filterUtil';
import { IssueType } from '@type/types';

const fakeIssues: IssueType[] = [...issues];

const getIssues = (req, res, ctx) => {
  const filteredIssues = filterIssues(req.url.search, fakeIssues);
  return res(ctx.status(200), ctx.json(filteredIssues));
};

const postCreateIssue = (req, res, ctx) => {
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
    milestone: { id: 123214, name: '마일스톤1' },
    assignee: ['happyGyu'],
  };
  fakeIssues.push(newIssue);
  return res(ctx.status(201));
};

export default function issueHandlers() {
  return [
    rest.get('/api/issues', getIssues),
    rest.post('/api/createIssue', postCreateIssue),
  ];
}
