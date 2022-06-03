import React, { useEffect, useRef } from 'react';
import classes from "../assets/styles/TextInput.module.css";

export default function Input({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className={classes.textInput} style={{ display: 'flex', flexDirection: 'column'}}  >
            <input
                type={type}
                name={name}
                value={value}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
