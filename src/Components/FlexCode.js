import React from 'react';
import Styles from '../App.module.css';

function FlexCode(props) {
    return (
        <div className={Styles.rootFlexCode}>
            <div>. Container {`{`}</div>
            <div>display : flex,</div>
            {    Object.keys(props.attributes).map((key, index) =>
                props.attributes[key] !== "" ?
                    <div key={index}>{key} : {props.attributes[key]},</div> : null
            )}
            <div>{`}`}</div>
        </div>
    );
}

export default FlexCode;