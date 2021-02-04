import React from 'react';
import Styles from '../App.module.css';
import PropTypes from 'prop-types';

function FlexContainer(props) {
    const dynamicStyles = {}
    Object.keys(props.attributes).forEach(key => {
        // console.log(key + " : " + props.attributes[key])
        dynamicStyles[`${key}`] = props.attributes[key]
    })
    var item = [];
    for (var i = 0; i < props.heightArray.length; i++) {
        // console.log(props.heightArray[i])
        item.push(<div key={i} className={Styles.singleItem} style={{ height: (props.height === "unset" ? "unset" : `${props.heightArray[i]}px`) }}>{i + 1}</div>);
    }
    // console.log(item)
    return (
        <div style={dynamicStyles} className={Styles.hoverStyle}>
            {item}
        </div>
    );
}

FlexContainer.propTypes = {
    height: PropTypes.string,
    heightArray: PropTypes.array,
    attributes: PropTypes.object
};

export default FlexContainer;