import { BrowserRouter as Router, } from "react-router-dom";
import AnimatedRoutes from "./components/AnimateRoutes";
import BackSound from "./components/Invitations/Backsound"

function App() {

  return (
    <>
      <BackSound />
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
