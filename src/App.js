import React,{ useState } from 'react';
import './App.css';
import FunctComp from './components/FunctComp';
import ClassComp from './components/ClassComp';

function App() {
const [fState, setFState] =useState(false);
const [cState, setCState] =useState(false);

  return (
    <>
    <h1>Styling using Functional and Class Component</h1>
    <div className='button-collection'>
    <button className='css-button-shadow-border-sliding--black' onClick={() => setFState(!fState)}>To see styling in Function components</button>
    <button className='css-button-shadow-border-sliding--black' onClick={() => setCState(!cState)}>To see styling in Class components</button>
    </div>
    <div className='compo-collection'>
    {fState ? <FunctComp/> : ""}
    {cState && <ClassComp/>}
    </div>
    </>
  );
}

export default App;
