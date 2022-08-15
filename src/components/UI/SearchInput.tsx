import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import {Tooltip} from "@mui/material";
import styled from "styled-components";

export default function SearchInput() {
    return (
        <Root>
            <InputBase
                sx={{ml: 1, flex: 1, fontSize: '15px'}}
                placeholder="Что вы ищите?"
            />
            <Tooltip title="Введите запрос">
                <StyledIconButton
                    // type="submit" aria-label="search"
                >
                    <SearchIcon/>
                </StyledIconButton>
            </Tooltip>
            {/*<Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>*/}
        </Root>
    );
}


const Root = styled.form`
  box-shadow: none;
  display: flex;
  width: 240px;
  align-items: center;
  border: 1px solid #F2F2F2;
  border-radius: 4px;

  transition-property: border-right-color, border-left-color, border-top-color, border-bottom-color;
  transition-duration: .3s;

  &:focus-within {
    border: 1px solid #1DA1F2;
  }
  margin: 0 15px 0 10px;
`;

const StyledIconButton = styled.div`
  &:hover svg {
    color: #1DA1F2;
    transition: color 150ms;
  }

  color: rgba(0, 0, 0, 0.54);
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;