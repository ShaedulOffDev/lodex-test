import { Route, Routes } from "react-router-dom"
import { Home, Navbar } from "./components"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App