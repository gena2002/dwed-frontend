import React from 'react';
import styled from "styled-components";

type PropsType = {
    children: React.ReactNode;
    color?: string;
}

const MyLink = ({children, color}: PropsType) => {
    return (
        <Root color={color}>
            {children}
        </Root>
    );
};

export default MyLink;

const Root = styled.div`
  text-align: center;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  color: ${props => props.color || '#1976d2'};

  &:hover {
    text-decoration: underline;
  }
`;