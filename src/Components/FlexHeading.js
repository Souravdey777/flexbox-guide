import React from 'react';
import Styles from '../App.module.css';

function FlexHeading(props) {
    return (
        <div className={Styles.rootFlexHeading}>
            <div className={Styles.pageHeading}>Flexbox-Guide</div>
            <div className={Styles.pageSubHeading}>By <a className={Styles.link} href="https://github.com/Souravdey777" target="_blank" rel="noreferrer">Sourav Dey</a></div>
            <div className={Styles.pageDescription}>A Guide for the concept of <a className={Styles.link} href="https://www.w3schools.com/css/css3_flexbox_container.asp" target="_blank" rel="noreferrer">Flexbox</a> and responsive design. Set the attributes as needed and copy the CSS code.</div>
            <div className={Styles.pageDescription}>CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension.</div>
            <div className={Styles.pageDescription}>Show some love <span class="material-icons" style={{ fontSize: "14px", margin: "0px -2px", verticalAlign: "-2px", color: "#ffa500" }}>star</span> Star the Repository and support the project</div>
            <div className={Styles.githublink}><a href="https://github.com/Souravdey777/Flexbox-Guide" target="_blank" rel="noreferrer"><img style={{ borderRadius: "4px" }} title="FlexBox-Guide Github Repo" alt="Flexbox-Guide Github Repo" src="https://img.shields.io/badge/Source%20Code-ffa500?style=flat-square&logo=github&logoColor=fff&label=Github&labelColor=333" /></a></div>
        </div>
    );
}

export default FlexHeading;