import React from 'react';

export default function Label({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} style={{ display:'block', color:'gray' }} className={className}>
            {value ? value : children}
        </label>
    );
}
