import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    
    
    <div className="bg-blue-200 h-15 flex justify-between p-3">
        
      <div className='flex items-center'><h3>Navigator</h3></div> 

      <div className='flex gap-10 items-center '>
          <Link to='/'>Home</Link>
         <Link to='/contact'>Contact</Link>
      </div>
        
        


    </div>


  )
}

export default Navbar