import React, { useState } from "react";
import Card from "./Card" ;



const App = () => {
  const [state,setState]= useState([
  
    {
      name: "kareem",
      age: 31,
      address: "Gabès",
    },
    {
      name: "Ahmed",
      age: 24,
      address: "Djerba",
    },
    {
      name: "Med",
      age: 21,
      address: "Sfax",
    },
  ])
 const deleteHandler =(event,clickedIdx)=>
 {
    const deleteoperation = state.filter((el,idx)=> idx!== clickedIdx);
   // console.log(deleteoperation)
   setState(deleteoperation);
 }
  return (
  <div className="cardContainer">

    <Card nameList={state} backgroundColor= "grey" color="pink" deleteHandler={deleteHandler}/>
  </div>
  );
};



export default App;
