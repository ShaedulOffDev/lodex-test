import { Route, Routes } from "react-router-dom"
import { Footer, Home, Navbar, ProductDetails } from "./components"
import { useEffect, useState } from "react"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => setLoading(false))
  }, [])
  if(loading){
    return (
      <div className="w-full h-full fixed top-0 z-[9999999999999] start-0 bg-light-green2 flex justify-center items-center">
        <i className="fa fa-circle-notch text-primary text-5xl fa-spin"></i>
      </div>
    )
  }
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:token" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App