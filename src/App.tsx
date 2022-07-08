import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {MainPage} from "./pages/MainPage"
import {AuthPage} from "./pages/AuthPage"
import {DetailPage} from "./pages/DetailPage"
import {Nav} from "./components/Nav";

function App() {
  return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" element={ <MainPage/> } />
                <Route path="/auth" element={ <AuthPage/> } />
                <Route path="/airport/:id" element={ <DetailPage/> } />
            </Routes>

        </>
  );
}

export default App;
