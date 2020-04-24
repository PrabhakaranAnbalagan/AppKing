import React from 'react';
import Card from './Card';

const Cards = (props) => (
    <div>
        {props.profiles.map(profile => {
            return <Card key={profile.id} profile={profile} />;
        })}
    </div>
);

export default Cards;