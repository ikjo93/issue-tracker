import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import { useHeaderState } from '@contexts/HeaderProvider';
import { LabelProvider } from '@contexts/LabelProvider';
import { MemberProvider } from '@contexts/MemberProvider';
import { MilestoneProvider } from '@contexts/MilestoneProvider';
import CreateIssuePage from '@pages/CreateIssuePage';
import DefaultPage from '@pages/DefaultPage';
import IssueDetailPage from '@pages/IssueDetailPage';
import JoinPage from '@pages/JoinPage';
import LabelMilestoneLayout from '@pages/LabelMilestoneLayout';
import LabelPage from '@pages/LabelPage';
import Layout from '@pages/Layout';
import LoginPage from '@pages/LoginPage';
import MilestonePage from '@pages/MilestonePage';
import OauthCallbackPage from '@pages/OauthCallbackPage';

export default function Routes() {
  const { isLogin } = useHeaderState();
  return (
    <RouterRoutes>
      {isLogin ? (
        <Route
          path="/"
          element={
            <LabelProvider>
              <MemberProvider>
                <MilestoneProvider>
                  <Layout />
                </MilestoneProvider>
              </MemberProvider>
            </LabelProvider>
          }
        >
          <Route index element={<DefaultPage />} />
          <Route path="createIssue" element={<CreateIssuePage />} />
          <Route path="detail/:id" element={<IssueDetailPage />} />
          <Route path="list" element={<LabelMilestoneLayout />}>
            <Route path="label" element={<LabelPage />} />
            <Route path="milestone" element={<MilestonePage />} />
          </Route>
        </Route>
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" />} />
        </Route>
      )}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/callback" element={<OauthCallbackPage />} />
    </RouterRoutes>
  );
}