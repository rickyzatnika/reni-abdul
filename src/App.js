
import { BrowserRouter as Router, } from "react-router-dom";
import AnimatedRoutes from "./components/AnimateRoutes";

import Header from "./components/Invitations/Headers";
import BackSound from "./components/Invitations/Backsound";
import SectionOnes from "./components/Invitations/SectionOne";
import SectionTwoo from "./components/Invitations/SectionTwo";
import SectionThrees from "./components/Invitations/SectionThree";
import SectionGallery from "./components/Invitations/SectionGallery";
import SectionProkes from "./components/Invitations/SectionProkes";
import Gifts from "./components/Invitations/Gift";
import SectionComment from "./components/Invitations/SectionComment";
import Subfooter from "./components/Invitations/Subfooter";
import Footer from "./components/Invitations/Footer";

function App() {

  return (
    <>
      <Router>
        <AnimatedRoutes />

      </Router>



    </>
  );
}

export default App;
