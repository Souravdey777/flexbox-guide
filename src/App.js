import React, { useState } from 'react';
import Styles from './App.module.css';
import FlexCode from './Components/FlexCode';
import FlexContainer from './Components/FlexContainer';
import FlexAttributes from './Components/FlexAttributes';

function App() {
  const [heights, setheights] = useState([60, 60, 60, 60, 60]);
  const [attributes, setattributes] = useState(
    {
      flexDirection: "",
      flexWrap: "",
      justifyContent: "",
      alignItems: "",
      alignContent: "",
    }
  );

  return (
    <div className={Styles.root}>
      <div className={Styles.containerSection}>
        <FlexContainer heights={heights} attributes={attributes} />
      </div>
      <div className={Styles.otherSection}>
        <FlexAttributes attributes={attributes} setattributes={setattributes} />
        <div className={Styles.vLine} />
        <FlexCode attributes={attributes} />
      </div>
    </div>
  );
}


export default App;
