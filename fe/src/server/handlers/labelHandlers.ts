import { rest } from 'msw';

import labels from '@server/dummyData/labels';
import { LabelType } from '@type/types';

const fakeLabels: LabelType[] = [...labels];

const getLabels = (req, res, ctx) => res(ctx.status(200), ctx.json(fakeLabels));

export default function labelHandlers() {
  return [rest.get('/api/labels', getLabels)];
}
