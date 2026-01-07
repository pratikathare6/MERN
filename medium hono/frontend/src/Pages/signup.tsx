import {Quote} from '../components/quote'
import {Auth} from '../components/auth'

export const Signup = ()=>{

    return <div>

            <div className='grid grid-cols-2'>

                <div>   

                    <Auth type='signup'/>
                    <Auth type= 'signin'/>

                </div>
                <div className='invisible lg:visible '>

                     <Quote/>
                
                </div>
                 
                      
            </div>
    
       
    </div>
}