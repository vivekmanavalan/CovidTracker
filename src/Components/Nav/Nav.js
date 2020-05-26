import React from 'react';
import image from '../Images/image.png'; 
import classes from './Nav.module.css';
import DrawerToggle from '../SideBar/DrawerToggleButton';

const toolbar = (props) => {
return(
    <header>
        <nav className={classes.nav_div}>
            <div className={classes.nav_drawer}>
                <DrawerToggle click = {props.handleSideDrawer}/>
                </div>
            <div className={classes.nav_logo}>
            <img src={image}  alt="COVID-19"/>
            </div>
        </nav>
    </header>
);
}
export default toolbar;