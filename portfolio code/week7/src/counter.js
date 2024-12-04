import React from "react";
import "./App.css";
import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const ClickHandle = () => {
        setCount(count + 1);
    };

    return (
        <div className="App-header">
            <form>
                <h1>Click Counts are {count}</h1>
                <button type="button" onClick={ClickHandle}>
                    Click me{count}{" "}
                </button>
            </form>
        </div>
    );
}
export default Counter;
