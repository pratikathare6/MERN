import Usercard from "./components/usercard";
import pic1 from "./assets/sample2.jpg";
import pic2 from "./assets/sample.jpeg.jpeg";
import "./App.css";
import Counter from "./components/counter.jsx";
import Toggle from "./components/toggle.jsx";
function App() {
  return (
    // <div className="user-container2">
    //   <Usercard name='pratik' desc='this is the desc' img={pic1}/>

    //   <Usercard name='sam' desc='this is text' img={pic2}/>
    //   <Usercard name='ram' desc='this is jsx' img={pic2}/>

    // </div>
    <div className="components">
      <div>
        <Counter />
      </div>

      <div>
        <Toggle />
      </div>
    </div>
  );
}

export default App;
