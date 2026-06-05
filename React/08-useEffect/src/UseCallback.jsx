import React, { useCallback, useState } from "react";

//useCallback is a hook used to memoize the function
//basically its cache a function to dont create a new function on every render.
//shopping cart product list example

const Child = React.memo(({ onclick }) => {
  console.log("child rerendered....");
  return <button onClick={onclick}>Click me i am child</button>;
});

const UseCallback = () => {
  const [count, setcount] = useState(0);

  const handleclick = useCallback(() => {
    console.log("clicked-parent");
  },[]);

  return (
    <div>
      <br />
      <br />

      <p>count: {count}</p>

        <Child onClick={handleclick}/>

      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default UseCallback;
