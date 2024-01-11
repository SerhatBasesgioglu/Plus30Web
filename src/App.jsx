import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BanList from "./pages/BanList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kicklist" element={<BanList />} />
    </Routes>
  );
}

export default App;
