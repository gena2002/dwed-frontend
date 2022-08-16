import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import LoginByPhoneForm from "./template/LoginByPhoneForm";
import MyLink from "./UI/MyLink";
import {IconButton, Tooltip} from "@mui/material";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import {observer} from "mobx-react-lite";
import {Context} from "../context";

type PropsType = {
    open: boolean;
    onClose: () => void;
}

const Auth = (props: PropsType) => {
    const {store} = useContext(Context);
    const {onClose, open} = props;
    const handleClose = () => {
        // e.stopPropagation()
        onClose()
    };

    useEffect(() => {
        if (store.isAuth) handleClose()
    }, [store.isAuth])
    return (
        <Root>
            <LogoRoot src={`https://file.rendit.io/n/NYPHCA03ce6cI5mJvqF5.png`}/>
            <CloseButton>
                <Tooltip title="Закрыть">
                    <IconButton onClick={handleClose} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <HighlightOffOutlinedIcon sx={{
                            color: '#ffffff'
                        }} fontSize="large"/>
                    </IconButton>
                </Tooltip>
            </CloseButton>
            <LoginByPhoneForm/>
            <MyLink color={'#fff'}>
                У меня нет аккаунта. Зарегистрироватся
            </MyLink>
        </Root>
    );
};

export default observer(Auth);

const Root = styled.div`
  z-index: 9999;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1DA1F2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const LogoRoot = styled.img`
  width: 100px;
  user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
`;

const CloseButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 432px;
`;
