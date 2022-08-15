import React, {useState} from 'react';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import {IconButton, Tooltip, Badge, Avatar} from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import styled from "styled-components";
import Container from "./UI/Container";
import SearchInput from "./UI/SearchInput";
import AccountMenu from "./UI/AccountMenu";

type HeaderProps = {}

const Header = ({}: HeaderProps) => {
    return (
        <Root>
            <Container>
                <Part>
                    <Tooltip title="Главная страница DWED">
                        <Logo>
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
                    <Part>
                        <Tooltip title="Уведомления">
                            <StyledIconButton>
                                <StyledBadge badgeContent={999}>
                                    <NotificationsNoneOutlinedIcon/>
                                </StyledBadge>
                            </StyledIconButton>
                        </Tooltip>
                    </Part>
                    <AccountMenu/>
                </Part>
            </Container>
        </Root>
    );
};

export default Header;

const Root = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(38, 38, 38, 0.1);
  padding: 6px 0;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 99999;
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
