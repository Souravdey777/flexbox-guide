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
            {props.heights.map((heights, index) => <div key={index} style={{ height: `${heights}px`, display: "flex", justifyContent: "center", alignItems: "flex-start", width: "60px", margin: "0.5px", backgroundColor: '#ffa500', fontSize: "18px", fontWeight: "bold", color: "#fff" }}>{index + 1}</div>)}
        </div>
    );
}

export default FlexContainer;