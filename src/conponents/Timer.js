import React, { useState } from "react";
import { useEffect } from "react";

export default function Timer({setStop,questionNumber}) {

    const[timer,setTimer] = useState(30);

    //countdown the second , every 1s gonna decrease 
    useEffect(() =>{
        if (timer === 0 ) return setStop(true);
        const interval = setInterval(() =>{

            setTimer((prev) => prev - 1);
        },1000);
        // to stop the Timer
        return () => clearInterval(interval);
    },[setStop,timer]);

    //Use [] because we need to set time for the next question
    useEffect(() => {
        setTimer(30);
    },[questionNumber]);
    return timer;
}