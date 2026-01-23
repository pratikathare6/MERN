import React from 'react'
import { ThemeConetextData } from '../Context Provider/ThemeContext'
import { useContext } from 'react'

const Navbar2 = () => {

    
    const [theme,setTheme] = useContext(ThemeConetextData)

  return (
    
        <div className='flex gap-4 px-4'>

            <div>Home</div>
            <div>Products</div>
            <div>About US</div>
            <div className={theme}>{theme}</div>
        </div>
           
  )
}

export default Navbar2