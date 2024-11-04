import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Hide from "./pages/Hide";
import Reveal from "./pages/Reveal";
import What from "./pages/What";
import How from "./pages/How";
import Types from "./pages/Types";

/* 
    This function sets up the navigation paths for all pages on the app
    Reference: https://www.youtube.com/watch?v=TWz4TjSssbg&t=621s
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/hide" element={<Hide />} />
        <Route path="/reveal" element={<Reveal />} />
        <Route path="/what-is-steganography" element={<What />} />
        <Route path="/how-steganography-works" element={<How />} />
        <Route path="/steganography-types" element={<Types />} />
      </Routes>
    </Router>
  );
}

export default App;
