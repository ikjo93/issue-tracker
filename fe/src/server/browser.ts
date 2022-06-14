import handlers from '@server/handlers';
import { setupWorker } from 'msw';

export const serviceWorker = setupWorker(...handlers());
