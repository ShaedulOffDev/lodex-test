import { Route, Routes } from "react-router-dom"
import { Home, Navbar, ProductDetails } from "./components"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:token" element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App