import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './components/Layout'
import Home from "./pages/Home"
import About from "./pages/About"
import Cars from "./pages/Car/Cars"
import CarDetail from "./pages/Car/CarDetail"

// HOST PAGE
import HostLayout from "./components/HostLayout"

import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostCars from "./pages/Host/HostCars"
import HostCarDetail from "./pages/Host/HostCarDetail"
import Reviews from "./pages/Host/Reviews"

import HostCarInfo from "./pages/Host/HostCarInfo"
import HostCarPricing from "./pages/Host/HostCarPricing"
import HostCarPhotos from "./pages/Host/HostCarPhotos"

import NotFound from "./pages/NotFound"

import "./server"

/**
 * Challenge: Create a 404 page.
 * 
 * 1. Create a new component in the pages dir called "NotFound"
 * 2. Add the elements from the design. Style it if you want.
 * 3. Add a "catch-all" route as a nested route under the Route. 
 *    (It doesn't matter where amongst the children it is.)
 * 4. Use the NotFound component as the element for that catch-all route
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
            <Route path="cars" element={<HostCars />} />
            
            <Route path="cars/:id/" element={<HostCarDetail />}>
              <Route index element={<HostCarInfo />} />
              <Route path="pricing" element={<HostCarPricing />}/>
              <Route path="photos" element={<HostCarPhotos />}/>
            </Route>
              
            <Route path="reviews" element={<Reviews />}/>
          </Route>
          <Route  path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App