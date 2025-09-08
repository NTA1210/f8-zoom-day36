import { HashRouter, Routes, Route } from "react-router";

//Pages
import {
  HomePage,
  ContactPage,
  DashBoardPage,
  AboutPage,
  PostsPage,
  UsersPage,
  PostDetailPage,
  LoginPage,
  RegisterPage,
  NotFoundPage,
  PrivacyPage,
  SettingPage,
} from "../../pages";

//Layouts
import { DefaultLayout, AuthLayout, AdminLayout } from "../../layouts";

// Comp
import { ScrollToTop } from "../../components";

function AppRoutes() {
  return (
    <HashRouter>
      {/* Scroll to top */}
      <ScrollToTop />
      <Routes>
        {/* Default Layout */}
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostDetailPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashBoardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="setting" element={<SettingPage />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
