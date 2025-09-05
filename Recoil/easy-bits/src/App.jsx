import './App.css'
import { useRecoilValue ,RecoilRoot,useRecoilState,useSetRecoilState} from 'recoil'
import {jobsAtom, networkAtom,messagingAtom,notificationAtom,totalnotify} from './atom'

function App() {
  
    return(

          <RecoilRoot>

            <Mainapp/>
            <Updatenotify/>

          </RecoilRoot>

    ) 

}

function Mainapp(){
 const networknotificationcount = useRecoilValue(networkAtom);
    const finalvalue = networknotificationcount >=99 ? '99+' : networknotificationcount;
    const jobscount = useRecoilValue(jobsAtom);
    const [messagingcount, setmesagecount ] = useRecoilState(messagingAtom);
    const notificationcount = useRecoilValue(notificationAtom);
    const totalcount = useRecoilValue(totalnotify);

  return (
    <> 

      <button style={{background: 'tomato'}}>My Network({finalvalue})</button>
      <button>Jobs({jobscount})</button>
      <button>Messaging({messagingcount})</button>
      <button>Notifications({notificationcount})</button>
      <button>Me({totalcount})</button>

      <button onClick={()=>{

          setmesagecount(messagingcount +1);


      }}>Update</button>

    
    </>
  )

}

function Updatenotify(){
const setnotifiycnt = useSetRecoilState(notificationAtom); 
    
    return (<button onClick={()=>{

        setnotifiycnt(c=> c+2);

    }}>Updatenotify</button>
  )
}

export default App
