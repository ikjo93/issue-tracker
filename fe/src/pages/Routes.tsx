import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { useHeaderState } from '@contexts/HeaderProvider';
import CreateIssuePage from '@pages/CreateIssuePage';
import DefaultPage from '@pages/DefaultPage';
import JoinPage from '@pages/JoinPage';
import LoginPage from '@pages/LoginPage';

export default function Routes() {
  const { isLogin } = useHeaderState();
  return (
    <RouterRoutes>
      <Route path="/" element={isLogin ? <DefaultPage /> : <LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/createIssue" element={<CreateIssuePage />} />
    </RouterRoutes>
  );
}
