import React from 'react';
import {Route} from "react-router-dom";
// import PrivateRoute from "./PrivateRoute"

import MainPage from "../components/pages/MainPage";
import EpisodePage from "../components/pages/EpisodePage";
import CharacterPage from "../components/pages/CharacterPage";

const Routes = () => {
    return (
        <>
            <Route path="/" element={<MainPage/>} exact/>
            <Route path="/episodes/:id" element={<EpisodePage/>} exact/>
            <Route path="/characters/:id" element={<CharacterPage/>} exact/>
        </>
    );
};

export default Routes;
