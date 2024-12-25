import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/" element={<Component3 />} /> */}
            {/* <Route path="/" element={<Component4 />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
