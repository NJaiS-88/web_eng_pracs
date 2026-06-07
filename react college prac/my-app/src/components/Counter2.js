import React, {useState} from 'react';

function Counter2(){

    const [count, setCount] = useState(0);
    const [mode, setMode] = useState("light mode");

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
        setMode("light mode");
    }
    const changeMode = () => {
        if(mode === "light mode"){
            setMode("dark mode");
        }else{
            setMode("light mode");
        }
    }
    return(
        <>
            <div>count: {count}</div>
            <div>mode: {mode}</div>
            <button onClick = {increment}>up</button>
            <button onClick={decrement}>down</button>
            <button onClick={reset}>reset</button>
            <button onClick={changeMode}>toggle mode</button>
        </>
    );
}
export default Counter2;