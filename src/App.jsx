import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Cars from "./components/Cars"
import CarDetail from "./components/CarDetail"

import "./server"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#SWIFT</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/cars">Cars</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App