import "./styles/index.css";

import { MainLayout } from "../shared/layouts/MainLayout";
import { AppRouter } from "./providers/router";
import { Suspense, useState } from "react";
import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { Page } from "../shared/layouts/Page/Page";
import { Modal } from "../shared/ui/Modal/Modal";
import { ContactMeForm } from "../feature/contactMeForm";
export enum Theme {
 DARK = "theme_dark",
 LIGHT = "theme_light",
}
function App() {
 const [theme, setTheme] = useState<Theme>(Theme.DARK);
 const [modalIsOpen, setModalIsOpen] =
  useState<boolean>(false);
 return (
  <div className={`app ${theme} theme_dark`}>
   <Modal modalIsOpen={modalIsOpen}>
    <ContactMeForm />
   </Modal>
   <MainLayout
    header={
     <Header
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
     />
    }
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
