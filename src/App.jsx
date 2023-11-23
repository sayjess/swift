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

import "./server"


  /**
   * Challenge: Add the routes necessary so we can access
   * /host/vans/:id/pricing and /host/vans/:id/photos.
   * 
   * Add stubbed-out components in separate files for
   * these routes (e.g. <h2>Pricing view here</h2>). I already
   * made the `HostVanInfo.jsx`, `HostVanPricing.jsx` and
   * `HostVanPhotos.jsx` files for you, but they're empty.
   * 
   * Don't forget: you'll need to use a special tool from
   * React Router so we can keep the top info (and 
   * eventually the navbar we build) on the page while going
   * from nested route to nested route. This will require some
   * slight changes to HostVanDetail.jsx
   * 
   * Since we don't have the navbar yet, you can test them
   * by manually navigating to e.g. /host/vans/1/pricing.
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App