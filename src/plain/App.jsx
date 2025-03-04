import { Routes, Route } from "react-router-dom"
// import Header from "./components/header"
import Header  from "./components/header"
import Home from "./pages/home"
import Hergement from "./pages/hebergement"
import Voiture from "./pages/voiture"
import Vol_hotel from "./pages/vol_hotel"
import Footer from "./components/footer"


function App() {
    return (
      <>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/hebergement" element={<Hergement />} />
            <Route path="/voiture" element={<Voiture />} />
            <Route path="/vol_hotel" element={<Vol_hotel />} />
        </Routes>
        <Footer />
      </>
    )
  }
  
  export default App
   