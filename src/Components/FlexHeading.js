import React from 'react';
import Styles from '../App.module.css';

function FlexHeading() {
    return (
        <div className={Styles.rootFlexHeading}>
            <div className={Styles.pageHeading}>Flexbox-Guide</div>
            <div className={Styles.pageSubHeading}>Developed with love by <a className={Styles.link} href="https://github.com/Souravdey777" target="_blank" rel="noreferrer">@Souravdey777</a></div>
            <div className={Styles.social_icons}>
                <a
                    href="https://souravdey.space/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-link"></i>
                </a>
                <a
                    href="https://github.com/Souravdey777/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/souravdey777/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a
                    href="https://twitter.com/Souravdey777/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
            <div className={Styles.pageDescription}>A Guide for the concept of <a className={Styles.link} href="https://www.w3schools.com/css/css3_flexbox_container.asp" target="_blank" rel="noreferrer">Flexbox</a> and responsive design. Set the attributes as needed and copy the CSS code.</div>
            <div className={Styles.pageDescription}>CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension.</div>
            <div className={Styles.pageDescription}>Show some love <span className="material-icons" style={{ fontSize: "14px", margin: "0px -2px", verticalAlign: "-2px", color: "#ffa500" }}>star</span> Star the Repository and <a className={Styles.link} href="https://twitter.com/intent/tweet?text=Checkout Flexbox-Guide Developed by @Souravdey777%0A%0AA visual guide for the concepts of CSS Flexbox.%0A%0Ahttps://flexbox-guide.vercel.app/" target="_blank" rel="noreferrer">Tweet Out</a> support the project</div>
            <div className={Styles.githublink}><a href="https://github.com/Souravdey777/Flexbox-Guide" target="_blank" rel="noreferrer"><img style={{ borderRadius: "4px" }} title="FlexBox-Guide Github Repo" alt="Flexbox-Guide Github Repo" src="https://img.shields.io/badge/Source%20Code-ffa500?style=flat-square&logo=github&logoColor=fff&label=Github&labelColor=333" /></a></div>
            <div><a href="https://www.producthunt.com/posts/flexbox-guide?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-flexbox-guide" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=281660&theme=light" alt="Flexbox-Guide - Flexbox-Guide : A flexbox code generator | Product Hunt" style={{ width: "144px", height: "32px" }} /></a></div>
        </div >
    );
}

export default FlexHeading;
