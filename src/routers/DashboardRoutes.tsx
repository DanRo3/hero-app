import { Route, Routes } from "react-router-dom"
import MarvelScreen from "../components/marvel/MarvelScreen"
import DcScreen from "../components/dc/DcScreen"
import SearchScreen from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/Navbar"
import HeroScreen from "../components/hero/HeroScreen"


const DashboardRoutes = () => {
  return (
        <>
          <Navbar/>
          <div className="lg:px-12 px-10 lg:mt-24">
            <Routes>
                <Route path="marvel" element={<MarvelScreen/>}/>
                <Route path="dc" element={<DcScreen/>}/>
                <Route path="hero/:heroeId" element={<HeroScreen/>}/>
                <Route path="search" element={<SearchScreen/>}/>
                <Route path="/" element={<MarvelScreen/>}/>
            </Routes>
          </div>
        </>
  )
}

export default DashboardRoutes
