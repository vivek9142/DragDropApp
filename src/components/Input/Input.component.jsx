import React from 'react';
import './Input.styles.css';

const Input = ({labelText,labelClass,name,type,className,...props}) => {
    if(type === 'text')
    return (
        <>
            <label htmlFor={name} className={`input--label ${labelClass}`}>
                {labelText}
            </label>

            <input type={type} name={name} 
            className={`input-type--text ${className}`} 
            id={name} {...props}/>
        </>
    );
    
    if(type === 'textarea')
    return (
        <>
            <label htmlFor={name} className={`input--label ${labelClass}`}>
                {labelText}
            </label>

            <textarea name={name} 
            className={`input-type--textarea ${className}`}
            placeholder='Type Something!' id={name} {...props}></textarea>
        </>
    )
}

export default Input