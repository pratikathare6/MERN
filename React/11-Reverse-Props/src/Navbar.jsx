
import React from 'react'

const Navbar = (props) => {

    function changetheme(){

        if(props.Theme=='Light'){

        props.setTheme('Dark');
            

        }
        else
        {
            props.setTheme('Light')
        }
    }


  return (
    <div>Navbar

    <h1>{props.Theme}</h1>

    <button onClick={changetheme}>Change Theme</button>

    </div>
  )
}

export default Navbar