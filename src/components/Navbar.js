import React,{useContext} from 'react';
import {ContextApi} from '../ContextApi';
import {Link} from 'react-router-dom';

const Navbar = () => {


const {bgColor, changeTheme} = useContext(ContextApi);


    return(
        <>
        <h1>Geekster</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/service">Service</Link>
        <br/>
        <Link to="/Careers">Careers</Link>
        <br />
        <br />
        <button onClick={()=>{changeTheme()}}>{bgColor?"Dark ":"Light "}Theme</button>
        {/* <button onClick={()=>{type:light}}>{bgColor?"Dark ":"Light "}Theme</button> */}
         
        </>
    )
}

export default Navbar;