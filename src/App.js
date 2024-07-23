import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {

  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const [alert, setAlert] = React.useState(null)  // alert is an object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, [2000])
  }

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")

  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
   
      showAlert("Dark mode has been disabled", "success")

    }
  }

  return (

    <div>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} /> {/* passing the props */}
        <Alert alert={alert} />
        <Routes>
          {/* render1 */}
          <Route path="/about" element={<About mode={mode} heading="About us" accordianHeading="Analyze your text"/>} />



          {/* render2 */}
          <Route path="/" element={<Textform heading="Try Textutils : Word Counter | Character counter | Lowercase to Uppercase | Uppercase to Lowercase " showAlert={showAlert} mode = {mode}/>} />


        </Routes>
      </Router>

    </div>
  )
}

export default App