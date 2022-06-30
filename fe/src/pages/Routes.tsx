import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import useLogin from '@hooks/useLogin';
import LabelMilestoneLayout from '@pages/common/layouts/LabelMilestoneLayout';
import Layout from '@pages/common/layouts/Layout';
import CreateIssuePage from '@pages/CreateIssuePage';
import DefaultPage from '@pages/DefaultPage';
import IssueDetailPage from '@pages/IssueDetailPage';
import JoinPage from '@pages/JoinPage';
import LabelPage from '@pages/LabelPage';
import LoginPage from '@pages/LoginPage';
import MilestonePage from '@pages/MilestonePage';
import OauthCallbackPage from '@pages/OautbCallbackPage';

export default function Routes() {
  const { isLogin } = useLogin();
  return (
    <RouterRoutes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/callback" element={<OauthCallbackPage />} />
      <Route path="/" element={isLogin ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<DefaultPage />} />
        <Route path="createIssue" element={<CreateIssuePage />} />
        <Route path="detail/:id" element={<IssueDetailPage />} />
        <Route path="list" element={<LabelMilestoneLayout />}>
          <Route path="label" element={<LabelPage />} />
          <Route path="milestone" element={<MilestonePage />} />
        </Route>
      </Route>
    </RouterRoutes>
  );
}
