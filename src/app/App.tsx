import "./styles/index.css";

import { MainLayout } from "../shared/layouts/MainLayout";
import { AppRouter } from "./providers/router";
import { Suspense, useState } from "react";
import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { Page } from "../shared/layouts/Page/Page";
export enum Theme {
 DARK = "theme_dark",
 LIGHT = "theme_light",
}
function App() {
 const [theme, setTheme] = useState<Theme>(Theme.DARK);
 return (
  <div className={`App ${theme} theme_dark`}>
   <MainLayout
    header={<Header />}
    content={
     <Suspense fallback={<Page>Loading...</Page>}>
      <AppRouter />
     </Suspense>
    }
    footer={<Footer />}
   />
  </div>
 );
}

export default App;
