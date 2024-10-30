import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LoginRes from "./pages/LoginResp";
import Register from "./pages/Register";
import RegisterRes from "./pages/RegisterResp";
import Menu from "./pages/Menu";
import HelpCenter from "./pages/HelpeCenter";
import Rotas from "./pages/Routes";
import Favorite from "./pages/Favorite";
import AccidentInfo from "./pages/AccidentInfo";
import Config from "./pages/Config";
import About from "./pages/About/indes";
import SelectProfile from "./pages/SelectProfile";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login-res" element={<LoginRes />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/cadastro-resp" element={<RegisterRes />} />
      <Route path="/menu" element={<Menu />} />

      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/routes" element={<Rotas />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/accident-info" element={<AccidentInfo />} />
      <Route path="/config" element={<Config />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<SelectProfile />} />
    </Routes>
  );
}

export default App;
