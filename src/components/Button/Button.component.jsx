import React from 'react';
import './Button.styles.css';

const Button = ({children,className,...props}) => {
    return (
        <button className={`button ${className}`} {...props}>{children}</button>
    )
}

export default Button