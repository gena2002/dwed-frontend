import React from 'react';

type CardProps = {
    width?: string;
    height?: string;
    children?: React.ReactNode
}

const Card = ({width, height, children}: CardProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Card;
