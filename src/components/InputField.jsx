import React from 'react';

function InputField({ name, inputType, label, value, changeHandler}) {
    return (
        <>
            <label htmlFor={`${name}`}>{label}</label>
            <input
                name={`${name}`}
                id={`${name}`}
                type={inputType}
                value={value}
                onChange={(e) => changeHandler(e)}
            />
        </>
    );
}

export default InputField;