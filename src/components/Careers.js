import React, {useContext} from 'react';
import {ContextApi} from '../ContextApi';
import Navbar from './Navbar';


export const Careers = () => {
    const {bgColor} = useContext(ContextApi);

    return(
        <div className={bgColor?'light' : 'dark'}>
        <Navbar  />
        <h3>Careers</h3>
        <h2>Careers-page.com is a service provided by Manatal.Manatal is the next generation recruitment 
        software enabling Human Resources departments and<br/> Recruitment Agencies to source and hire candidates in the most effective way.</h2>
        </div>
    )
}
