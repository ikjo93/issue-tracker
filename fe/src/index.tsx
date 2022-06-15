import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@/App';
import { serviceWorker } from '@server/browser';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

if (process.env.NODE_ENV === 'development') {
  serviceWorker.start();
}

root.render(
  <Router>
    <App />
  </Router>,
);
