import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const PopupButton = React.forwardRef(({children, ...props}, ref) => {

    const [isShowPopup, setIsShowPopup] = useState(false);

    const handleClick = (e) => {
        // e.preventDefault()
        if (e.target.name === 'button') {
            console.log('this is from popup button')
        }
        if (e.target.name === 'close') {
            setIsShowPopup(false)
        }
    }

    return (
        <>
            {isShowPopup && React.cloneElement(children[0], {onClick: handleClick})}
            {/*{isShowPopup && children[0]}*/}
            <Root ref={ref} {...props} onClick={() => setIsShowPopup(true)}>
                {children.map((child, i) => {
                    if (i > 0) return child;
                })}
            </Root>
        </>

    );
});

export default PopupButton;

const Root = styled.div`
  cursor: pointer;
  box-shadow: none;
  //background-color: #007c0c;
`;
