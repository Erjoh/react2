import React from 'react';

const Buttons = ({title, MyOnClick}) => {
    return (
        <div>
            <button onClick={MyOnClick}>{title}</button>
        </div>
    );
};

export default Buttons;