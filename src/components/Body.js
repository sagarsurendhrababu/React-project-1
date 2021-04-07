import React from 'react';
import './Body.css';
import {SideBar} from './SideBar';
import Container from './Container';

function Body(){
    return(
        <div className="body">
            <SideBar/>
            <Container/>
        </div>
    )
}


export default Body;