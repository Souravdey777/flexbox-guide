import React from 'react';
import Styles from '../App.module.css';

function FlexContainer(props) {
    const dynamicStyles = {}
    Object.keys(props.attributes).map(key => {
        console.log(key + " : " + props.attributes[key])
        dynamicStyles[`${key}`] = props.attributes[key]
    })
    console.log("heights", props.heights)
    return (
        <div style={dynamicStyles} className={Styles.hoverStyle}>
            {props.heights.map((heights, index) => <div key={index} className={Styles.singleItem} style={{ height: `${heights}px` }}>{index + 1}</div>)}
        </div>
    );
}

export default FlexContainer;