import './App.css'
import { Suspense } from 'react';
import { useRecoilValue ,RecoilRoot} from 'recoil'
import {notifications,totalnotify} from './atom'

function Mainapp(){
    const data = useRecoilValue(notifications);
    const totalcount = useRecoilValue(totalnotify);

  return (
    <> 

      <button style={{background: 'tomato'}}>My Network({data.network})</button>
      <button>Jobs({data.jobs})</button>
      <button>Messaging({data.messaging})</button>
      <button>Notifications({data.notifications})</button>
      <button>Me({totalcount})</button>

      
    
    </>
  )

}

function App() {
  
    return(

          <RecoilRoot>
          <Suspense fallback={<div>Loading notifications...</div>}>
          <Mainapp/>
          </Suspense>
            
            
          </RecoilRoot>

    ) 

}


 

export default App
