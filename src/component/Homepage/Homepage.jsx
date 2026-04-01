import React from 'react';
import UserNum from './UserNum';
import DigiItems from './DigiItems';


const Homepage = ({digiPromise}) => {
    return (
        <div>
            <UserNum />

            <DigiItems digiPromise={digiPromise} />
           
            

        </div>
    );
};

export default Homepage;