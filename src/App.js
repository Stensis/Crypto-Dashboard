import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Constants/Routes";
import Homepage from "./components/Home/Homepage";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";
import Login from "../src/components/Auth/Login/LoginForm";
import SignUp from "../src/components/Auth/SignUp/SignUp";
import {CryptoProvider} from "./CryptoContext"


function App() {
  return (
    <CryptoProvider>
    <div >
      <Routes>
        <Route path={ROUTES.signUp} element={<SignUp />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.home} element={<Homepage />} />
        <Route path={ROUTES.cryptoDetails} element={<CryptoDetails />} />
      </Routes>
    </div>
    </CryptoProvider>
  );
}

export default App;
