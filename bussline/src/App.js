import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
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
import EditProfile from "./pages/EditProfile";
import TrackRoutes from "./pages/TrackRoutes";

import "./components/Animations/animations.css";
import InTransit from "./pages/InTransit/index";
import FamilyLink from "./pages/FamilyLink";
import LoadingScreen from "./components/tela/LoadingScreen";
import MenuRes from "./pages/Menu/menuRes";
import MenuMain from "./pages/Menu/menuMain";

function App() {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="slide"
        timeout={300}
        unmountOnExit
      >
        <div>
          <Routes location={location}>
            <Route path="/home" element={<Home />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/routes" element={<Rotas />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/accident-info" element={<AccidentInfo />} />
            <Route path="/config" element={<Config />} />
            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login />} />
            <Route path="/login-res" element={<LoginRes />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/cadastro-resp" element={<RegisterRes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menuMain" element={<MenuMain />} />
            <Route path="/menu-responsavel" element={<MenuRes />} />
            <Route path="/escolher-perfil" element={<SelectProfile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/acompanhar-rota" element={<TrackRoutes />} />
            <Route path="/em-rota" element={<InTransit />} />
            <Route path="/family-link" element={<FamilyLink />} />
            <Route path="/" element={<LoadingScreen />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
