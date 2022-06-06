import React from 'react';

export default function Checkbox({ name, value, handleChange,checked }) {
    return (
        <>
        {(checked)?<>
            <input style={{marginRight:'10px'}}
                type="checkbox"
                name={name}
                value={value}
                onChange={(e) => handleChange(e)} checked
            />
            
            </>:<>
            <input style={{marginRight:'10px'}}
                type="checkbox"
                name={name}
                value={value}
                onChange={(e) => handleChange(e)}
            />
            </>}
        </>
    );
}
