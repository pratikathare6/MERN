import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
    const [count, setcount] = useState(0);

    return (
        <div className="counter-container">
            <p>you have clicked {count} times</p>
            <button
                id="btn"
                onClick={() => {
                    setcount(count + 1);
                }}
            >
                Click me
            </button>

            <ul><li className="bg-orange-400">Hi</li>
            <li>test</li></ul>
        </div>
    );
};

export default Counter;
