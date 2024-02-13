import { lazy } from "react";

export const ProjectsItemPageAsync = lazy(
 () => import("./ProjectsItemPage")
);
