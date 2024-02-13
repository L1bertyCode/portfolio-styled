import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../../../pages/MainPage";
import { ContactsPage } from "../../../../pages/ContactsPage";
import { ProjectsPage } from "../../../../pages/ProjectsPage";
import { ProjectsItemPage } from "../../../../pages/ProjectsItemPage";

interface AppRouterProps {}

export const AppRouter = memo((props: AppRouterProps) => {
 return (
  <Routes>
   <Route path="/" element={<MainPage />} />
   <Route path="/contacts" element={<ContactsPage />} />
   <Route path="/projects" element={<ProjectsPage />} />
   <Route
    path="/projects/:id"
    element={<ProjectsItemPage />}
   />
  </Routes>
 );
});
