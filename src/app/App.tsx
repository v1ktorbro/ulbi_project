import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./styles/index.scss";

const AboutPage = lazy(() => import("../pages/About/AboutPage"));
const MainPage = lazy(() => import("../pages/Main/MainPage"));

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
