
//Create
//Provide
//Use
import { createContext } from 'react'
import { useState } from 'react'

   export const ThemeConetextData = createContext()

const ThemeContext = (props) => {

    const [Theme, setTheme] = useState('Light')

  return (



    <ThemeConetextData.Provider value={[Theme,setTheme]}>
        {props.children}
    </ThemeConetextData.Provider>
  )
}

export default ThemeContext