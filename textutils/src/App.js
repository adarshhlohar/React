import "./App.css";
import Navbar from "./component/Navbar";
// import About from "./component/About";
import TextForm from "./component/TextForm";
import React,{useState} from 'react'



function App() {
  const[mode,setMode] = useState("light");

  const toggleMode = ()=>{
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#0a1a29";
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
    }
  }


  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggle={toggleMode}/>
      <hr/>
      <div className="container">
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
