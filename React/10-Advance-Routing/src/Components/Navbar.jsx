import {Link} from 'react-router-dom'
const Navbar = () => {
  return (



    <div className='bg-cyan-500 py-5 flex justify-between px-2'>
        

        <div><h1>Advance Routing</h1></div>
        <div className='flex items-center gap-8 px-2'>
         <Link to={'/'}>Home</Link>
         <Link to={'/Products'}>Products</Link>
         <Link to={'/About'}>About</Link>
 
          
        </div>
       
        
        
    </div>


  )
}

export default Navbar