import classes from "./Counter.module.scss";
import P from "../Common/Typography/P/P";
import { useState } from "react";
import Button from "./Buttons/Button.jsx";
import { useEffect } from "react";
const Counter=(props)=>{
    let [positionsArray,setPositionsArray]=useState(["up","down"])
    let [count,changeCount] = useState(0);
    let decreaseCount=()=>{
        changeCount(count=>count-1);
    }
    let increaseCount=()=>{
        changeCount(count=>count+1);
    }
    useEffect(()=>{
        if(count %5==0 & count !==0){
            console.log(count);
            let first=positionsArray[0];
            let second=positionsArray[1];
            setPositionsArray([
                positionsArray[0]=second,
                positionsArray[1]=first
            ])
        console.log(positionsArray)
        }
    },[count])
    return(
        <div className={classes.counter}>
            <Button onClick={increaseCount} position={positionsArray[0]}>+</Button>
            <P>{count}</P>
            <Button onClick={decreaseCount} position={positionsArray[1]}>-</Button>
        </div>
    )
}
export default Counter;