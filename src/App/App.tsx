import React from 'react';
import './App.module.scss';
import {Route, Routes} from "react-router-dom";
import {AdminPage} from "../components/AdminPage/AdminPage";
import {LoginPage} from "../components/LoginPage/LoginPage";

export const App = () => {

  return (
        <Routes>
          <Route path={"/"} element={<AdminPage/>}/>
          <Route path={"/login"} element={<LoginPage/>}/>
        </Routes>
  );
}

