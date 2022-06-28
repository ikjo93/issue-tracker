import { rest } from 'msw';

import mileStones from '@server/dummyData/milestones';
import { MilestoneType } from '@type/types';

interface IMilestoneResponse {
  countOfOpenMilestones: number;
  countOfClosedMilestones: number;
  milestones: MilestoneType[];
}

const fakeMilestones: IMilestoneResponse = mileStones;
let lastMilestoneId =
  mileStones.countOfOpenMilestones + mileStones.countOfClosedMilestones + 1;

const getMilestones = (req, res, ctx) => {
  const target = new URLSearchParams(req.url.search).get('status') || 'OPEN';
  const filteredMilestone = {
    ...fakeMilestones,
    milestones: fakeMilestones.milestones.filter(
      (milestone) => milestone.status === target,
    ),
  };
  return res(ctx.status(200), ctx.json(filteredMilestone));
};

const postMilestones = (req, res, ctx) => {
  const { subject, description, endDate } = req.body;
  const newMilestone = {
    id: lastMilestoneId,
    subject,
    description,
    endDate,
    status: 'OPEN',
    totalCountOfIssues: 0,
    countOfClosedIssues: 0,
  };
  lastMilestoneId += 1;
  fakeMilestones.countOfOpenMilestones += 1;
  fakeMilestones.milestones.push(newMilestone);
  return res(ctx.status(200), ctx.json(newMilestone));
};

export default function milestoneHandlers() {
  return [
    rest.get('/api/milestones', getMilestones),
    rest.post('/api/milestones', postMilestones),
  ];
}
