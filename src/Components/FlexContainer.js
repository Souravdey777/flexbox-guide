import React from 'react';
import Styles from '../App.module.css';

function FlexContainer(props) {
    const dynamicStyles = {}
    Object.keys(props.attributes).forEach(key => {
        // console.log(key + " : " + props.attributes[key])
        dynamicStyles[`${key}`] = props.attributes[key]
    })
    var item = [];
    for (var i = 0; i < props.count; i++) {
        item.push(<div key={i} className={Styles.singleItem}>{i + 1}</div>);
    }
    // console.log(item)
    return (
        <div style={dynamicStyles} className={Styles.hoverStyle}>
            {item}
        </div>
    );
}

export default FlexContainer;