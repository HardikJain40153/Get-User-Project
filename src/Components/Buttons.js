import React from 'react';

const Buttons = ({ users, onButtonClick }) => {
    return (
        <div className="ma-auto tc">
            {
                users.map((user, i) => {
                    return (
                        <div key={i + 1}>
                            <button
                                onClick={() => onButtonClick(user.id)}
                                className="f1 grow ma2 pa2 white b pv2 ph3 bg-black hover-bg-mid-gray br-pill pointer">
                                {i + 1}
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Buttons;