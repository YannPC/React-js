import { useRef } from "react";

export default function Start({setUsername}) {

  const inputRef = useRef();
  
//set My Username
  const handleClick= () => {

    inputRef.current.value && setUsername(inputRef.current.value); // if there is value you can continue

  };
  return (
    
    //setting up Start bottom and Update Username with onCLick
    <div className="start">
      <input 
      placeholder="Enter your Name"
      className="startInput"
      ref={inputRef}
      />
      
      <button className="startButton" onClick={handleClick}> 
        Start
        </button> 
        
    </div>
  );
}
