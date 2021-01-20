import React, { useState } from 'react';
import Styles from './App.module.css';
import FlexCode from './Components/FlexCode';
import FlexContainer from './Components/FlexContainer';
import FlexAttributes from './Components/FlexAttributes';
import FlexHeading from './Components/FlexHeading';

function App() {
  const [attributes, setattributes] = useState(
    {
      flexDirection: "",
      flexWrap: "",
      justifyContent: "",
      alignItems: "",
      alignContent: "",
    }
  );
  const [heightArray, setheightArray] = useState([40, 40, 40, 40, 40]);
  const [height, setheight] = useState("fixed");

  return (
    <div className={Styles.root}>
      <div className={Styles.containerSection}>
        <FlexContainer heightArray={heightArray} attributes={attributes} height={height} />
        <FlexHeading />
      </div>
      <div className={Styles.otherSection}>
        <FlexAttributes attributes={attributes} setattributes={setattributes} heightArray={heightArray} setheightArray={setheightArray} height={height} setheight={setheight} />
        <FlexCode attributes={attributes} />
      </div>
    </div>
  );
}


export default App;
