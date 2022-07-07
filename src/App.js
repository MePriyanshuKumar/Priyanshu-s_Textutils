import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUTils is amazing application"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install textuTils now..."
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;