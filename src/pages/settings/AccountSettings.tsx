import React from 'react';
import {Button, TextField} from "@mui/material";

const AccountSettings = () => {
    return (
        <div>
            <div>AccountSettings</div>
            {/*<Button variant="text">Text</Button>*/}
            {/*<Button variant="contained">Contained</Button>*/}
            {/*<Button variant="outlined">Outlined</Button>*/}
            <TextField
                id="standard-helperText"
                label="Имя"
                helperText="Введите имя"
                variant="standard"
            />
            {' '}
            <TextField
                id="standard-helperText"
                label="Фамилия"
                helperText="Введите фамилию"
                variant="standard"
            />
        </div>
    );
};

export default AccountSettings;
