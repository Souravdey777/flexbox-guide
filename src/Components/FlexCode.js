import React, { useRef } from 'react';
import Styles from '../App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

function FlexCode(props) {
    const textarea = useRef();

    const copyToClipboard = () => {
        toast('Copied!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
        navigator.clipboard.writeText(textarea.current.innerText)
    };
    return (
        <div className={Styles.rootFlexCode}>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />
            {
                document.queryCommandSupported('copy') &&
                <div onClick={() => copyToClipboard()} className={Styles.copyIcon}><i style={{ fontSize: "16px" }} className="material-icons">content_copy</i>
                    <span className={Styles.tooltiptext}>Copy</span>
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
        </div >
    );
}

FlexCode.propTypes = {
    attributes: PropTypes.object
};

export default FlexCode;
