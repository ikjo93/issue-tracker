import issueHandlers from '@server/handlers/issueHandlers';
import labelHandlers from '@server/handlers/labelHandlers';
import loginHandlers from '@server/handlers/loginHandlers';
import memberHandlers from '@server/handlers/memberHandlers';
import milestoneHandlers from '@server/handlers/milestoneHandlers';

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

export default function handlers() {
  return [
    ...loginHandlers(),
    ...issueHandlers(),
    ...milestoneHandlers(),
    ...memberHandlers(),
    ...labelHandlers(),
  ];
}
