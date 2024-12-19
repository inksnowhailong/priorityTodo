
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Dialog from "./components/dialog/dialog";
function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialog" element={<Dialog />} />
      </Routes>
    </main>
  );
}

export default App;
