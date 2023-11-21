import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Layout from './components/Layout'
import Home from "./pages/Home"
import About from "./pages/About"
import Cars from "./pages/Cars"
import CarDetail from "./pages/CarDetail"

// HOST PAGE
import HostLayout from "./components/HostLayout"

import Dashboard from "./pages/Dashboard"
import Income from "./pages/Income"
import Reviews from "./pages/Reviews"



import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cars" element={<Cars />} />
          <Route path="cars/:id" element={<CarDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App