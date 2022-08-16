import React from 'react';
import styled from "styled-components";
import {Demo} from "./Demo";

type PropsType = {}

const Auth = ({}: PropsType) => {
    return (
        <Root>
            <LogoRoot src={`https://file.rendit.io/n/NYPHCA03ce6cI5mJvqF5.png`}/>
            <Demo/>
        </Root>
    );
};

export default Auth;

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
`;

const LogoRoot = styled.img`
  width: 100px;
  user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
`;
