import React from 'react';
import classes from './SideDrawer.module.css';
import {Link} from 'react-router-dom';
const sideDrawer = (props) => { 
    if(props.show){
    return(
        <nav className={classes.side_drawer}>
            <ul className={classes.side_drawer_ul}>
                <Link to ="/">
                <li onClick={props.click}>Home</li>
                </Link>
                <Link to ="/guidelines">
                <li onClick={props.click}>Guidelines</li>
                </Link>
            </ul>
        </nav>
    );
    }
    else {
        return(
            <nav className={classes.side_drawer_close}>
                <ul className={classes.side_drawer_ul}>
                    <li>Home</li>
                    <li>Guidelines</li>
                </ul>
            </nav>
        );  
    }
 
}

export default sideDrawer;