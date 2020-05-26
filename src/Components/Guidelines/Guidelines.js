import React from 'react';
import Tribute from '../Images/tribute.mp4';
import classes from './Guidelines.module.css';
const guideLines = (props) => {
    return(
        <div>
            <br />
            <div onClick={props.click} className={classes.divlines}>
            <h2 className={classes.name}>Guidelines</h2>
            </div>
            <br />
            <div onClick={props.click}>
            <div>
            <video width="100%" height="420" controls >
                <source src={GuidelineVideo}/>
            </video>
            </div>
            <br />
            <div>
                <div className={classes.divlines}>
                <h2 className={classes.name}>Tribute</h2>    
                </div>
                <br />
                <div>
                <video width="100%" height="420" controls >
                    <source src={Tribute}/>
                </video>
                </div>
            </div>
            </div>
        </div>
    );
}

export default guideLines;