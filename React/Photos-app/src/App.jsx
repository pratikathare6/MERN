import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from './Components/Card'

function App() {
  const [data, setdata] = useState([]);

  const [page, setpage] = useState(1)

  useEffect(() => {
    getimages()
  }, [page]) 

  async function getimages() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=20`
    );

     
    setdata(response.data);
  }

  let printuserdata = <h1 className="top-1/2 left-1/2">Loading...</h1> ;
  if (data.length > 0) {
    printuserdata = data.map(function (elem,idx) {
      return (

        <Card elem={elem} key={idx}/>

       
      );
    });
  } else {
    <div>
      <p>{printuserdata}</p>
    </div>;
  }

  return (
    <>
      <div className="h-screen flex flex-wrap items-center justify-center overflow-auto">{printuserdata}</div>

      <div className="flex items-center justify-center gap-4 py-6">

          <button style={{opacity: page==1 ? 0.5 : 1 }} className="bg-amber-300 border-2 p-3 rounded-2xl text-sm active:scale-95"

          onClick={function(){

            if(page>1){

               setpage(page-1)
               setdata([])

            }
           

          }}
          
          >Prev</button>
            <h3 >Page {page}</h3>
          <button className="bg-amber-300 border-2 p-3 rounded-2xl text-sm active:scale-95"

            onClick={()=>{

              

                 setpage(page+1)
                 setdata([])
 
            }}

          >Next</button>

      </div>
    </>
  )
}

export default App;
