import React from 'react';
import Styles from '../App.module.css';

function FlexHeading(props) {
    return (
        <div className={Styles.rootFlexHeading}>
            <div className={Styles.pageHeading}>Flexbox-Guide</div>
            <div className={Styles.pageSubHeading}>By <a className={Styles.link} href="https://github.com/Souravdey777">Sourav Dey</a></div>
            <div className={Styles.pageDescription}>CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension.</div>
            <div className={Styles.githublink}><a href="https://github.com/Souravdey777/Flexbox-Guide"><img title="FlexBox-Guide Github Repo" alt="Flexbox-Guide Github Repo" src="https://img.shields.io/badge/Source%20Code-ffa500?style=flat&logo=github&logoColor=fff&label=Github&labelColor=333" /></a></div>
        </div>
    );
}

export default FlexHeading;