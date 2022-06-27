import { rest } from 'msw';

import issues from '@server/dummyData/issues';
import fakeLabels from '@server/dummyData/labels';
import fakeMembers from '@server/dummyData/members';
import fakeMileStones from '@server/dummyData/milestones';
import { filterIssues } from '@server/filterUtil';
import { IssueType } from '@type/types';

let fakeIssues: IssueType[] = [...issues];

const getIssue = (req, res, ctx) => {
  const { id } = req.params;
  const targetIssue = fakeIssues.find((issue) => issue.id === Number(id));
  return res(ctx.status(200), ctx.json(targetIssue));
};

const getIssues = (req, res, ctx) => {
  const filteredIssues = filterIssues(req.url.search, fakeIssues);
  return res(ctx.status(200), ctx.json(filteredIssues));
};

const postCreateIssue = (req, res, ctx) => {
  const {
    subject,
    comments,
    labels,
    milestone,
    assignees,
    writer,
    profileUrl,
  } = req.body;
  const newIssueId = fakeIssues[fakeIssues.length - 1].id + 1;
  const newIssue: IssueType = {
    id: newIssueId,
    subject,
    comments,
    writer,
    profileUrl,
    status: 'OPEN',
    createdDateTime: new Date().toISOString(),
    labels,
    milestone,
    assignees,
  };
  fakeIssues.push(newIssue);
  return res(ctx.status(201));
};

const patchUpdatedStatus: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const {
    updatedStatus,
    idOfIssues,
  }: { updatedStatus: 'OPEN' | 'CLOSE'; idOfIssues: number[] } = req.body;
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

const updateSubject: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { subject }: { subject: string } = req.body;
  const { id: targetId } = req.params;
  const updatedIssues = fakeIssues.map((issue) => {
    const updatedIssue = { ...issue };
    if (updatedIssue.id === Number(targetId)) {
      updatedIssue.subject = subject;
    }
    return updatedIssue;
  });
  fakeIssues = updatedIssues;
  return res(ctx.status(200), ctx.json(fakeIssues));
};

const updateLabels: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { labels: labelIds }: { labels: number[] } = req.body;
  const labelDatas = fakeLabels.filter((label) => labelIds.includes(label.id));
  const { id: targetId } = req.params;
  const updatedIssues = fakeIssues.map((issue) => {
    const updatedIssue = { ...issue };
    if (updatedIssue.id === Number(targetId)) {
      updatedIssue.labels = labelDatas;
    }
    return updatedIssue;
  });
  fakeIssues = updatedIssues;
  return res(ctx.status(200), ctx.json(fakeIssues));
};

const updateMilestone: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { milestoneId }: { milestoneId: number } = req.body;
  const milestoneData = fakeMileStones.find(
    (milestone) => milestone.id === milestoneId,
  );
  const { id: targetId } = req.params;
  const updatedIssues = fakeIssues.map((issue) => {
    const updatedIssue = { ...issue };
    if (updatedIssue.id === Number(targetId)) {
      updatedIssue.milestone = milestoneData;
    }
    return updatedIssue;
  });
  fakeIssues = updatedIssues;
  return res(ctx.status(200), ctx.json(fakeIssues));
};

const updateAssignees: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { assignees: assigneeIds }: { assignees: number[] } = req.body;
  const assigneeDatas = fakeMembers.filter((member) =>
    assigneeIds.includes(member.id),
  );
  const { id: targetId } = req.params;
  const updatedIssues = fakeIssues.map((issue) => {
    const updatedIssue = { ...issue };
    if (updatedIssue.id === Number(targetId)) {
      updatedIssue.assignees = assigneeDatas;
    }
    return updatedIssue;
  });
  fakeIssues = updatedIssues;
  return res(ctx.status(200), ctx.json(fakeIssues));
};

export default function issueHandlers() {
  return [
    rest.get('/api/issues', getIssues),
    rest.get('/api/issue/:id', getIssue),
    rest.post('/api/createIssue', postCreateIssue),
    rest.patch('/api/issues/status/update', patchUpdatedStatus),
    rest.patch('/api/issues/:id/subject/update', updateSubject),
    rest.patch('/api/issues/:id/labels/update', updateLabels),
    rest.patch('/api/issues/:id/milestone/update', updateMilestone),
    rest.patch('/api/issues/:id/assignees/update', updateAssignees),
  ];
}
