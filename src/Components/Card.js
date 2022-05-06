import React from 'react';

const Card = ({ user }) => {
    return (
        <div className="tc bg-white dib pa3 ma2 grow ba bw1 shadow-2">
            <img width="120px" height="120px"
                className="ma-auto pa1 tc shadow-1"
                src={user.avatar}
                alt="avatar"
            />
            <div>
                <h4 className="ma-auto f5 b">
                    Name :- {`${user.first_name} ${user.last_name}`}
                </h4>
                <h4 className="ma-auto f5 b">
                    Email :- {`${user.email}`}
                </h4>
            </div>
        </div>
    );
}

export default Card;
// {
    //   "src": "logo192.png",
    //   "type": "image/png",
    //   "sizes": "192x192"
    // },
    // {
    //   "src": "logo512.png",
    //   "type": "image/png",
    //   "sizes": "512x512"
    // }