import { Route, Routes } from "react-router-dom";
import Main from "./Component/Pages";
import NavBar from "./Component/Pages/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
