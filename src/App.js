import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

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
      // setMode("dark");
      // document.body.style.backgroundColor = "grey";
      showAlert("dark mode enabled", "success");
    } else if (mode === "dark") {
      // setMode("light");
      // document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
    }
    // else if(mode==="light"||"dark"){
    //   setMode("green");
    //   document.body.style.backgroundColor="#234F1E"
    //   showAlert("light mode enabled","success");}
  };

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <div className="container my-3">
  //             <TextForm showAlert={showAlert} mode={mode} />
  //           </div>
  //         }
  //       />
  //       <Route path="/about" element={<About mode={mode} />} />
  //     </Routes>
  //   )
  // );

  return (
    <div
      style={{
        backgroundColor: mode === "dark" ? "grey" : "white",
        minWidth: "100%",
        minHeight: "100vh"
      }}
    >
      <BrowserRouter>
        <Navbar
          mode={mode}
          onModeToggle={(newMode) => {
            console.log(newMode);
            setMode(newMode);
          }}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div
                className="container my-3"
                style={{
                  color: mode === "dark" ? "white" : "black",
                  backgroundColor: mode === "dark" ? "grey" : "white",
                }}
              >
                <Alert alert={alert} />
                <TextForm mode={mode} showAlert={showAlert} />
              </div>
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  // return <RouterProvider router={router} />;
}

export default App;
