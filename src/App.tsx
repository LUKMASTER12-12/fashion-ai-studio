import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load components for better performance
const CreatePage = lazy(() => import("./components/CreatePage"));
const ProjectDetailsPage = lazy(
  () => import("./components/ProjectDetailsPage"),
);
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));
const ProfilePage = lazy(() => import("./components/ProfilePage"));
const SettingsPage = lazy(() => import("./components/SettingsPage"));
const SubscriptionPage = lazy(() => import("./components/SubscriptionPage"));
const DashboardSubscriptionPage = lazy(
  () => import("./components/DashboardSubscriptionPage"),
);

// Auth pages
const LoginPage = lazy(() => import("./components/auth/LoginPage"));
const RegisterPage = lazy(() => import("./components/auth/RegisterPage"));
const ForgotPasswordPage = lazy(
  () => import("./components/auth/ForgotPasswordPage"),
);
const ResetPasswordPage = lazy(
  () => import("./components/auth/ResetPasswordPage"),
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <>
        {/* For the tempo routes */}
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/edit/:id" element={<CreatePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route
            path="/dashboard/subscription"
            element={<DashboardSubscriptionPage />}
          />

          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Add this before the catchall route to allow Tempo to handle its routes */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
