import React from 'react';
import Styles from '../App.module.css';

function FlexAttributes(props) {
    const Attributes = {
        flexDirection: ["row", "row-reverse", "column", "column-reverse"],
        flexWrap: ["nowrap", "wrap", "wrap-reverse"],
        justifyContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
        alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"],
        alignContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
    }

    return (
        <div className={Styles.rootFlexAttributes} >
            <div className={Styles.heading}>Attributes</div>
            <div className={Styles.attributesContainer}>
                {Object.keys(props.attributes).map(attributeName =>
                    <div className={Styles.eachAttributeColumn}>
                        <div className={Styles.attribute}>
                            {attributeName.split(/(?=[A-Z])/)[0].toLowerCase() + '-' + attributeName.split(/(?=[A-Z])/)[1].toLowerCase()}
                        </div>
                        {Attributes[`${attributeName}`].map((value) => <Value value={value} attributes={props.attributes} attributeName={attributeName} setattributes={props.setattributes} />)}
                    </div>)
                }
                <div>
                </div>
            </div>
        </div>
    );
}

function Value(props) {
    return (
        <div className={Styles.value} style={props.attributes[`${props.attributeName}`] === props.value ? { backgroundColor: "#ffa500", color: "#fff" } : {}} onClick={() => {
            props.setattributes({ ...props.attributes, [`${props.attributeName}`]: props.attributes[`${props.attributeName}`] === props.value ? "" : props.value });
        }}>{props.value}</div>
    );
}

export default FlexAttributes;