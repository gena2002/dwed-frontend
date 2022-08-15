import React from 'react';
import styled from "styled-components";

type ContainerProps = {
    children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
    return (
        <Root>
            {children}
        </Root>
    );
};

export default Container;

const Root = styled.div`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
`;
