import 'remixicon/fonts/remixicon.css';
import Navbar from './navbar';
import { Page1}  from './page1';

const Section1 = (props) => {
    console.log(props.users);
  return (
        <div className=' overflow-hidden h-screen '>
        <Navbar/>
        <Page1 users ={props.users}/>

        </div>
        

  )
}

export default Section1