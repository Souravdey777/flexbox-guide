import React from 'react';
import Styles from '../App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from "lodash";

function FlexAttributes(props) {
    const Attributes = {
        flexDirection: ["row", "row-reverse", "column", "column-reverse"],
        flexWrap: ["nowrap", "wrap", "wrap-reverse"],
        justifyContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
        alignItems: ["flex-start", "flex-end", "center", "stretch", "baseline"],
        alignContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
    }

    return (

        <div className={Styles.rootFlexAttributes} >
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
            <div className={Styles.heading}>Attributes</div>
            <div className={Styles.attributesContainer}>
                {Object.keys(props.attributes).map((attributeName, index) =>
                    <div className={Styles.eachAttributeColumn} key={index}>
                        <div className={Styles.attribute}>
                            {attributeName.split(/(?=[A-Z])/)[0].toLowerCase() + '-' + attributeName.split(/(?=[A-Z])/)[1].toLowerCase()}
                        </div>
                        {Attributes[`${attributeName}`].map((value, index) => <Value value={value} key={index} attributes={props.attributes} attributeName={attributeName} setattributes={props.setattributes} />)}
                    </div>)
                }
                <div>
                </div>
            </div>
            <div className={Styles.hLine} />
            <div className={Styles.itemOperationsContainer}>
                <div className={Styles.attribute}>flex items</div>
                <div className={Styles.itemOperations} onClick={() => {
                    // console.log(props.heightArray.length)
                    if (props.heightArray.length < 24) {
                        props.setheightArray([...props.heightArray, props.height === "fixed" ? 40 : _.sample([20, 30, 40, 50, 60, 70, 80, 90, 100])])
                    }
                    else {
                        toast('Maximum of 24 items can be added!', {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                        });
                    }
                }}>add item</div>
                <div className={Styles.itemOperations} onClick={() => {
                    if (props.heightArray.length > 1) {
                        var heightArrayTemp = props.heightArray;
                        heightArrayTemp.pop();
                        props.setheightArray([...heightArrayTemp])
                    }
                    else {
                        toast("Cannot remove anymore items!", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                        });
                    }
                }}>remove item</div>
                <div className={Styles.itemOperations} onClick={() => {

                    var newHeight = []
                    var i = 0
                    if (props.height === "unset") {
                        for (i = 0; i < props.heightArray.length; i++) {
                            newHeight[i] = _.sample([20, 30, 40, 50, 60, 70, 80, 90, 100])
                        }
                        // console.log(newHeight)
                        props.setheightArray([...newHeight])
                        props.setheight("random")

                    }
                    else if (props.height === "random") {
                        for (i = 0; i < props.heightArray.length; i++) {
                            newHeight[i] = 40
                        }
                        // console.log(newHeight)
                        props.setheightArray([...newHeight])
                        props.setheight("fixed")

                    }
                    else if (props.height === "fixed") {
                        props.setheight("unset")
                    }
                }}>item height: {props.height}</div>
            </div>
        </div>
    );
}

function Value(props) {
    return (
        <div className={Styles.value} style={props.attributes[`${props.attributeName}`] === props.value ? { backgroundColor: "#ffa500", color: "#fff" } : {}}
            onClick={() => {
                props.setattributes({ ...props.attributes, [`${props.attributeName}`]: props.attributes[`${props.attributeName}`] === props.value ? "" : props.value });
            }}>
            {props.value}
        </div>
    );
}

export default FlexAttributes;