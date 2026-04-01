import React from 'react';
import UserNum from './UserNum';
import DigiItems from './DigiItems';
import Step from '../Step';
import Workflow from '../Workflow';


const Homepage = ({digiPromise}) => {
    return (
        <div>
            <UserNum />

            <DigiItems digiPromise={digiPromise} />
           
            <Step />

            <Workflow />

        </div>
    );
};

export default Homepage;