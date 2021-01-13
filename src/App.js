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
  const [count, setcount] = useState(5);

  return (
    <div className={Styles.root}>
      <div className={Styles.containerSection}>
        <FlexContainer count={count} attributes={attributes} />
        <FlexHeading />
      </div>
      <div className={Styles.otherSection}>
        <FlexAttributes attributes={attributes} setattributes={setattributes} count={count} setcount={setcount} />
        <FlexCode attributes={attributes} />
      </div>
    </div>
  );
}


export default App;
