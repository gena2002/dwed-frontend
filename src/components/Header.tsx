import React, {useContext, useEffect} from 'react';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import {IconButton, Tooltip, Badge, Avatar, Button} from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import styled from "styled-components";
import Container from "./UI/Container";
import SearchInput from "./UI/SearchInput";
import AccountMenu from "./template/AccountMenu";
import {useNavigate} from "react-router-dom";
import {Context} from "../context";
import {observer} from "mobx-react-lite";
import SimpleDialog from "./UI/SimpleDialog";
import Auth from "./Auth";

type HeaderProps = {}

const Header = ({}: HeaderProps) => {
    const navigate = useNavigate();
    const {store} = useContext(Context);

    {/*<Auth/>*/
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(() => {
    //     console.log('open', open);
    // }, [open]);


    return (
        <Root>
            <Container>
                <Part>
                    <Tooltip title="Главная страница DWED">
                        <Logo onClick={() => navigate('/')}>
                            DWED
                        </Logo>
                    </Tooltip>
                    <SearchInput/>
                    <Tooltip title="Лента">
                        <StyledIconButton>
                            <TextSnippetOutlinedIcon/>
                        </StyledIconButton>
                    </Tooltip>
                    <Tooltip title="Предложения">
                        <StyledIconButton>
                            <LocalMallOutlinedIcon/>
                        </StyledIconButton>
                    </Tooltip>
                    <Tooltip title="Организации">
                        <StyledIconButton>
                            <BusinessCenterOutlinedIcon/>
                        </StyledIconButton>
                    </Tooltip>
                    <Tooltip title="Стримы">
                        <StyledIconButton>
                            <VideocamOutlinedIcon/>
                        </StyledIconButton>
                    </Tooltip>
                </Part>

                <Part gap={'20px'}>
                    {store.isAuth ? <>
                        <Part>
                            <Tooltip title="Уведомления">
                                <StyledIconButton>
                                    <StyledBadge badgeContent={999}>
                                        <NotificationsNoneOutlinedIcon/>
                                    </StyledBadge>
                                </StyledIconButton>
                            </Tooltip>
                        </Part>
                        <AccountMenu onClose={handleClose}/>
                    </> : <Part>
                        <Button variant="text" onClick={handleClickOpen}>Войти</Button>
                        <Button variant="text" onClick={() => {
                        }}>Регистрация</Button>
                        <SimpleDialog
                            open={open}
                            onClose={handleClose}>
                            <Auth open={open}
                                  onClose={handleClose}/>
                        </SimpleDialog>
                    </Part>}
                </Part>
            </Container>
        </Root>
    );
};

export default observer(Header);

const Root = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(38, 38, 38, 0.1);
  padding: 6px 0;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1200;
`;
type PartProps = {
    gap?: string;
}
const Part = styled.div<PartProps>`
  display: flex;
  gap: ${props => props.gap || '5px'};
  align-items: center;
`;
const Logo = styled.div`
  color: #1DA1F2;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
`;
const StyledIconButton = styled(IconButton)`
  &:hover svg {
    color: #1DA1F2;
    transition: color 150ms;
  }
`;
const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    color: #fff;
    background-color: #FF5A5F;
  }
`;
