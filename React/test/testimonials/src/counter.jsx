import { useRef, useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const noofrerenders = useRef(0);

    const handlerender = ()=>{

        setCount(count+1);

    };

    noofrerenders.current = noofrerenders.current+1;
   

        return(

            <div>
                <p>no of renders {noofrerenders.current}</p>
                <button onClick={handlerender}>Force to rerender</button>

                </div>

        )
}

export default Counter;
