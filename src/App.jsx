import { Route, Routes } from "react-router-dom";
import Main from "./Component/Pages";
import NavBar from "./Component/Pages/NavBar/NavBar";
import About from "./Component/Pages/about";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
