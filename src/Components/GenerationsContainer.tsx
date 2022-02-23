import React from "react";
import Generations from "./Generations.tsx";
import '../CSS/GenerationContainer.css';
import SearchBar from "./SearchBar.tsx";


const GenerationContainer = ({genInfo}) => {
    
  const genList = genInfo.map((gen, index) => {
    return(
      <Generations 
        genName={gen.name}
        id={[index + 1]}
        key={[index + 1]}
      />
    )
  })
  
  return (
    <>
      <h2>Choose Pokemon Generation</h2>
      <section className="gen-container">
        {genList}
      </section>
    </>
  )
}

export default GenerationContainer