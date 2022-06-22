import { rest } from 'msw';

import issues from '@server/dummyData/issues';
import { filterIssues } from '@server/filterUtil';
import { IssueType } from '@type/types';

let fakeIssues: IssueType[] = [...issues];

const getIssues = (req, res, ctx) => {
  const filteredIssues = filterIssues(req.url.search, fakeIssues);
  return res(ctx.status(200), ctx.json(filteredIssues));
};

const postCreateIssue = (req, res, ctx) => {
  const { subject, description, labels, milestone, assignees } = req.body;
  const newIssueId = fakeIssues[fakeIssues.length - 1].id + 1;
  const newIssue = {
    id: newIssueId,
    subject,
    description,
    writer: 'happyGyu',
    profileUrl: 'https://avatars.githubusercontent.com/u/95538993?v=4',
    status: 'OPEN',
    createdDatetime: new Date().toISOString(),
    labels,
    milestone,
    assignees,
  };
  fakeIssues.push(newIssue);
  return res(ctx.status(201));
};

const patchUpdatedStatus: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { updatedStatus, idOfIssues } = req.body;
  const updatedIssues = fakeIssues.map((issue) => {
    const updatedIssue = { ...issue };
    if (idOfIssues.includes(issue.id)) {
      updatedIssue.status = updatedStatus;
    }
    return updatedIssue;
  });
  fakeIssues = updatedIssues;
  return res(ctx.status(200), ctx.json(fakeIssues));
};

export default function issueHandlers() {
  return [
    rest.get('/api/issues', getIssues),
    rest.post('/api/createIssue', postCreateIssue),
    rest.patch('/api/issues/status/update', patchUpdatedStatus),
  ];
}
