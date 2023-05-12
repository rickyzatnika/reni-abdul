
import { BrowserRouter as Router, } from "react-router-dom";
import AnimatedRoutes from "./components/AnimateRoutes";
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {

  return (
    <>
      <ParallaxProvider>

        <Router>
          <AnimatedRoutes />
        </Router>
      </ParallaxProvider>



    </>
  );
}

export default App;
