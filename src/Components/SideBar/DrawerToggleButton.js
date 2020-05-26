import React from 'react';
import classes from './Drawer.module.css';

const drawerToggleButton = (props) => {
    return(
        <button className={classes.toggleButton} onClick={props.click}>
            <div className={classes.toggleButton_line}/>
            <div className={classes.toggleButton_line}/>
            <div className={classes.toggleButton_line}/>
        </button>
    );
}

export default drawerToggleButton;