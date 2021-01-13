import React, { useRef } from 'react';
import Styles from '../App.module.css';

function FlexCode(props) {
    const textarea = useRef();

    const copyToClipboard = () => {
        console.log(textarea.current.innerText)
        navigator.clipboard.writeText(textarea.current.innerText)
    };
    return (
        <div className={Styles.rootFlexCode}>
            {
                document.queryCommandSupported('copy') &&
                <div onClick={() => copyToClipboard()} className={Styles.copyIcon}><i className="material-icons">content_copy</i>
                    <span className={Styles.tooltiptext}>Click to Copy</span>
                </div>
            }
            <div ref={textarea}>
                <div>.Container {`{`}</div>
                <div>display : flex;</div>
                {Object.keys(props.attributes).map((key, index) =>
                    props.attributes[key] !== "" ?
                        <div key={index}>{key.split(/(?=[A-Z])/)[0].toLowerCase() + '-' + key.split(/(?=[A-Z])/)[1].toLowerCase()} : {props.attributes[key]};</div> : null
                )}
                <div>{`}`}</div>
            </div>
        </div>
    );
}

export default FlexCode;