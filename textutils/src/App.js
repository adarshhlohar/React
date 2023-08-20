import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About" />
      <hr />
      <div className="container">
      <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
