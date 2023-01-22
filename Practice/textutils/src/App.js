// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils Dark Mode-Enable";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lite mode has been enable", "success");
      document.title = "TextUtils Lite Mode-Enable";
    }
  };

  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <NavBar /> */}

        {/* Alert */}
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          {/* <About /> */}
          {/* </Route> */}

          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Entre text in the box"
                mode={mode}
              />
            }
          />

          {/* </Route> */}
        </Routes>

        {/* TextForm */}
        {/* <div className="container pt-5"> */}
        {/* <TextForm showAlert={showAlert} heading="Entre text in the box"  mode={mode}/> */}

        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
