import React from 'react';
// import Styles from '../App.module.css';

function FlexContainer(props) {
    const Styles = {
        width: "100%",
        display: "flex",
        flex: "1",
        backgroundColor: "#ffebc7"
    }
    Object.keys(props.attributes).map(key => {
        console.log(key + " : " + props.attributes[key])
        Styles[`${key}`] = props.attributes[key]
    })
    return (
        <div style={Styles}>
            {props.heights.map((heights, index) => <div key={index} style={{ height: `${heights}px`, display: "flex", justifyContent: "center", alignItems: "flex-start", width: "60px", margin: "0.5px", backgroundColor: '#ffa500', fontSize: "18px", fontWeight: "bold", color: "#fff" }}>{index + 1}</div>)}
        </div>
    );
}

export default FlexContainer;