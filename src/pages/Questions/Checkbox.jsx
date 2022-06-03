import React from 'react';

export default function Checkbox({ name, value, handleChange }) {
    return (
        <input style={{marginRight:'10px'}}
            type="checkbox"
            name={name}
            value={value}
            onChange={(e) => handleChange(e)}
        />
    );
}
