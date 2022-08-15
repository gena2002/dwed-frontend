import React from 'react';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import IconButton from '@mui/material/IconButton';
// import {Tooltip} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import './styles/App.css';
import './assets/fonts/golostext/golostext.css';

import Header from "./components/Header";
import Settings from "./pages/Settings";

const App = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Settings/>
        </BrowserRouter>
    );
};

export default App;
