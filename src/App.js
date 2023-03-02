import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

import {
  BrowserRouter,
  Routes,
  Route,
  
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("dark"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About Textutils" /> */}
      {/* <Navbar/> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Alert alert={alert}/>
        <BrowserRouter>
          <Routes>
            <Route path="/About" element={<about />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </BrowserRouter>

        <TextForm heading="Enter the text to analyze below " mode={mode}/> 
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
