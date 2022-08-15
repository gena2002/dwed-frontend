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

type Props = {}

export default function Settings(props: Props) {

    const listItem = [
        {id: 1, title: 'Account', icon: <PermIdentityOutlinedIcon/>, url: '/account'},
        {id: 2, title: 'Notification', icon: <EditNotificationsOutlinedIcon/>, url: '/notification'},
        {id: 3, title: 'Security', icon: <LockOutlinedIcon/>, url: '/security'},
        {id: 4, title: 'Chat settings', icon: <ChatOutlinedIcon/>, url: '/chat_settings'},
        {id: 5, title: 'Payment', icon: <AccountBalanceWalletOutlinedIcon/>, url: '/payment'},
    ]

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                {listItem.map(({id, title, icon, url}: any) => (
                    <ListItem key={id} disablePadding>
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
  overflow-y: scroll;
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
  //background-color: green;
`;