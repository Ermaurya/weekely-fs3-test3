import React, {useContext} from 'react';
import {ContextApi} from '../ContextApi';
import Navbar from './Navbar';

const Contact = () => {

    const {bgColor} = useContext(ContextApi);

    return(
        <div className={bgColor?'light' : 'dark'}>
        <Navbar  />
        <h4>CONTACT US</h4>
        <h2>if any problem contact cs.shubhammaurya@gmail.com</h2>
        </div>
    )
}

export default Contact;