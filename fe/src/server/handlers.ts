import issueHandlers from '@server/handlers/issueHandlers';
import labelHandlers from '@server/handlers/labelHandlers';
import loginHandlers from '@server/handlers/loginHandlers';
import memberHandlers from '@server/handlers/memberHandlers';
import milestoneHandlers from '@server/handlers/milestoneHandlers';

export default function handlers() {
  return [
    ...loginHandlers(),
    ...issueHandlers(),
    ...milestoneHandlers(),
    ...memberHandlers(),
    ...labelHandlers(),
  ];
}
