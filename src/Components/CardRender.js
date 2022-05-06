import React from 'react';
import Card from './Card';

const CardRender = ({ showUserCard, user }) => {
    return !showUserCard ?
        null :
        <div className="tc">
            <Card
                className="tc w1 h1"
                user={user}
            />
        </div>
}
export default CardRender;