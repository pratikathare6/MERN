import "./App.css";

function App() {
  function btnclk() {
    alert("btn is clicked");
  }

  const btnclk2 = () => {
    confirm("clicked");
  };

  function enterdata(val) {
    console.log(val.target.value);
  }

  function scoll(val) {
     if(val>0){

        console.log('scroll down');

     }
     else{

      console.log('scroll up');
     }
  }

  return (
    <div>
      <div className="flex gap-2">
        <button className="bg-red-200 border   p-3" onClick={btnclk}>
          clickme
        </button>
        <button className="bg-yellow-200 border p-3" onClick={btnclk2}>
          confirm
        </button>
      </div>

      <input
        className="border mt-10"
        onChange={(val) => {
          enterdata(val);
        }}
        type="text"
      />

      <div onWheel={function(elem){

        scoll(elem.deltaY);

      }}>
        <div className="bg-green-200 h-200 w-200">a</div>
        <div className="bg-pink-200 h-200 w-200">b</div>
        <div className="bg-blue-200 h-200 w-200">c</div>
      </div>
    </div>
  );
}

export default App;
