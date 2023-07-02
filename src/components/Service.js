import React, {useContext} from 'react';
import {ContextApi} from '../ContextApi';
import Navbar from './Navbar';

const Service = () => {
    const {bgColor} = useContext(ContextApi);

    return(
        <div className={bgColor?'light' : 'dark'}>
        <Navbar />
        <h2>Service</h2>
        <h2>A service is an " act or use for which a consumer, firm, or government is willing to pay." Examples include work done by barbers, doctors, lawyers, mechanics, banks,<br/> insurance companies, and so on. Public services are those that society as a whole</h2>
        </div>
    );
}

export default Service;