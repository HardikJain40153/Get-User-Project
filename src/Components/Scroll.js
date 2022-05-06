import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ width: '150%', overflow: 'scroll', border: '2px solid black', height: '440px' }}>
            {props.children}
        </div>
    );
};
export default Scroll;