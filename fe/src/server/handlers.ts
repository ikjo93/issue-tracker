import issueHandlers from '@server/handlers/issueHandlers';
import loginHandlers from '@server/handlers/loginHandlers';

export default function handlers() {
  return [...loginHandlers(), ...issueHandlers()];
}
