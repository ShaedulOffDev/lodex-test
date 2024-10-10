import { Route, Routes } from "react-router-dom"
import { Footer, Home, Navbar, ProductDetails } from "./components"
import { useEffect, useState } from "react"

const App = () => {
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
    window.addEventListener('load', () => setLoading(false))
  }, [])

  useEffect(() => {
    window.addEventListener('load', () => setLoading(false))
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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
      <button className={`fixed z-[99999] end-10 bottom-10 bg-gray-200 px-4 py-2 rounded text-xl text-primary opacity-50 hover:opacity-100 transition-all ${!isVisible && 'hidden'}`} onClick={() => window.scrollTo(0,0)}>
        <i className="fa fa-arrow-up-long"></i>
      </button>
    </div>
  )
}

export default App