import "./styles/index.css";

import { MainLayout } from "../shared/layouts/MainLayout";
import { AppRouter } from "./providers/router";
import { Suspense, useEffect, useState } from "react";
import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";

import { Modal } from "../shared/ui/Modal/Modal";
import { ContactMeForm } from "../feature/contactMeForm";
import { PageWithLoader } from "../widgets/PageWithLoader";
export enum Theme {
 DARK = "theme_dark",
 LIGHT = "theme_light",
}
function App() {
 const [theme, setTheme] = useState<Theme>(Theme.DARK);
 const [modalIsOpen, setModalIsOpen] =
  useState<boolean>(false);
 useEffect(() => {
  if (modalIsOpen) {
   document.body.style.position = "fixed";
  }
  return () => {
   document.body.style.position = "relative";
  };
 }, [modalIsOpen]);
 return (
  <div className={`app ${theme} theme_dark`}>
   <Modal
    modalIsOpen={modalIsOpen}
    setModalIsOpen={setModalIsOpen}
   >
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
     <Suspense fallback={<PageWithLoader />}>
      <AppRouter />
     </Suspense>
    }
    footer={<Footer />}
   />
  </div>
 );
}

export default App;
