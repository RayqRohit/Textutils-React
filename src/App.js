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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"

    }
  }

  return (

    <div>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} /> {/* passing the props */}
        <Alert alert={alert} />
        <Routes>
          {/* render1 */}
          <Route path="/about" element={<About heading="About us" />} />



          {/* render2 */}
          <Route path="/" element={<Textform heading="Enter the text to Analyze" showAlert={showAlert} mode = {mode}/>} />


        </Routes>
      </Router>

    </div>
  )
}

export default App