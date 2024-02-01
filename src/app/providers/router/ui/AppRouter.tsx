import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { ContactsPage } from "../../../../shared/pages/ContactsPage";
import { MainPage } from "../../../../shared/pages/MainPage";
import { ProjectsPage } from "../../../../shared/pages/ProjectsPage";

interface AppRouterProps {}

export const AppRouter = memo((props: AppRouterProps) => {
 return (
  <Routes>
   <Route path="/" element={<MainPage />} />
   <Route
    path="/contacts"
    element={<ContactsPage />}
   />{" "}
   <Route path="/projects" element={<ProjectsPage />} />
  </Routes>
 );
});
