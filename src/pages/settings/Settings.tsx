import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";

import AccountSettings from "./AccountSettings";
import NotificationSettings from "./NotificationSettings";
import SecuritySettings from "./SecuritySettings";
import ChatSettings from "./ChatSettings";
import PaymentSettings from "./PaymentSettings";

type Props = {}

export default function Settings(props: Props) {
    const navigate = useNavigate();
    const items = [
        {
            id: 1,
            title: 'Account',
            icon: <PermIdentityOutlinedIcon/>,
            url: 'account',
            element: <AccountSettings/>
        },
        {
            id: 2,
            title: 'Notification',
            icon: <EditNotificationsOutlinedIcon/>,
            url: 'notification',
            element: <NotificationSettings/>
        },
        {
            id: 3,
            title: 'Security',
            icon: <LockOutlinedIcon/>,
            url: 'security',
            element: <SecuritySettings/>
        },
        {
            id: 4,
            title: 'Chat settings',
            icon: <ChatOutlinedIcon/>,
            url: 'chat',
            element: <ChatSettings/>
        },
        {
            id: 5,
            title: 'Payment',
            icon: <AccountBalanceWalletOutlinedIcon/>,
            url: 'payment',
            element: <PaymentSettings/>
        },
    ]

    const drawer = (
        <div>
            <Toolbar sx={{fontWeight: '500', fontSize: '18px'}}>Настройки</Toolbar>
            <Divider/>
            <List>
                {items.map(({id, title, icon, url}: any) => (
                    <ListItem key={id} disablePadding onClick={() => navigate(`${url}`)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText sx={{
                                color: 'rgba(0, 0, 0, 0.54)'
                            }} primary={title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );


    return (
        <ContainerSettings>
            <Root>
                {drawer}
            </Root>
            <Content>
                <Routes>
                    {items.map((item: any) => <Route
                        element={item.element}
                        path={item.url}
                        key={item.url}
                    />)}
                    <Route
                        path="*"
                        element={<Navigate to="/settings/account" replace/>}
                    />
                </Routes>
            </Content>
        </ContainerSettings>
    );
}

const Root = styled.div`
  position: sticky !important;
  position: -webkit-sticky !important;
  top: 54px;
  height: calc(100vh - 54px);
  width: 240px;
  display: block;
  //background-color: #e0a2a2;
  //overflow-y: scroll;
  flex-shrink: 0;

  border-right-style: solid;
  border-right-color: rgba(0, 0, 0, 0.12);
  border-right-width: thin;
  border-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgb(0, 0, 0, 1) 1 50%,
  rgba(0, 0, 0, 0)) 1 100%;
`;

const ContainerSettings = styled.div`
  display: flex !important;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
`;

const Content = styled.div`
  //height: 200vh;
  width: 100%;
  padding: 10px;
  //background-color: green;
`;