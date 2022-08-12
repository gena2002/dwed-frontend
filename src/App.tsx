import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import {Tooltip} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>

            <Tooltip title="GitHub repository">
                <IconButton onClick={() => window.location.href = 'https://github.com/gena2002/dwed-frontend'}>
                    <GitHubIcon/>
                </IconButton>
            </Tooltip>


        </BrowserRouter>
    );
};

export default App;
