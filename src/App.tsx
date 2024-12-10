import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ProductDetail from "./pages/ProductDetail"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
