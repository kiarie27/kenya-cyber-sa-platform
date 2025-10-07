import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage.tsx';
import { AdvisoriesPage } from './pages/AdvisoriesPage.tsx';
import { AdvisoryDetailPage } from './pages/AdvisoryDetailPage.tsx';
import { KevPage } from './pages/KevPage.tsx';
import { TrendsPage } from './pages/TrendsPage.tsx';
import { ReportPage } from './pages/ReportPage.tsx';
import { WorkspaceLoginPage } from './pages/workspace/WorkspaceLoginPage.tsx';
import { WorkspaceDashboardPage } from './pages/workspace/WorkspaceDashboardPage.tsx';
import { WorkspaceIncidentsPage } from './pages/workspace/WorkspaceIncidentsPage.tsx';
import { PublicLayout } from './layout/PublicLayout.tsx';
import { WorkspaceLayout } from './layout/WorkspaceLayout.tsx';
import { RequireAuth } from './components/RequireAuth.tsx';

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/advisories" element={<AdvisoriesPage />} />
        <Route path="/advisories/:id" element={<AdvisoryDetailPage />} />
        <Route path="/kev" element={<KevPage />} />
        <Route path="/trends" element={<TrendsPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Route>
      <Route path="/workspace/login" element={<WorkspaceLoginPage />} />
      <Route element={<RequireAuth />}>
        <Route element={<WorkspaceLayout />}>
          <Route path="/workspace" element={<WorkspaceDashboardPage />} />
          <Route path="/workspace/incidents" element={<WorkspaceIncidentsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
