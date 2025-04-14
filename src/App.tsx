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
