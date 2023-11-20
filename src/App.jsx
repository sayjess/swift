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

 /**
   * Challenge: Make the HostLayout component!
   * The HostLayout should use Links to navigate to the following
   * routes: 
   *    * Dashboard ("/host")
   *    * Income ("/host/income")
   *    * Reviews ("/host/reviews")
   * Then replace the parent "/host" route's element below with the
   * new HostLayout component you made.
   * 
   * NOTE: The dashboard route/page will be gone for now, but don't fret.
   * We'll be fixing that in the next lesson.
   */

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