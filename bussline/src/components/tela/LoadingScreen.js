import React, { useEffect } from "react";
import "./LoadingScreen.css";
import { useNavigate } from "react-router-dom";
import LogoAnimation from "../Animations/LogoAnimation";
const LoadingScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/escolher-perfil");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="tela-inicio">
      <div className="container-logo">
        <LogoAnimation />
      </div>
      <p className="loading-text">BussLine</p>
    </div>
  );
};

export default LoadingScreen;
