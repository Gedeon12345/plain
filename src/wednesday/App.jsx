import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import Articles from "./pages/articles"
import Accounts from "./pages/accounts"
import Login from "./pages/login"
import Information from "./pages/information"
// import "../index2.css"

export default function () {

    return (
        <>
            {/* <Header />
            <Home />
            <Footer /> */}
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/information" element={<Information />} />
                </Routes>
            <Footer/>
            
        </>
    )

} 