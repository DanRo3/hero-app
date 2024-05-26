import { Route, Routes, BrowserRouter } from "react-router-dom"
import LoguinScreen from "../components/loguin/LoguinScreen"
import DashboardRoutes from "./DashboardRoutes"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={
              <PublicRoute>
                <LoguinScreen/>
              </PublicRoute>}
            />
            
            <Route path="/*" element={
              <PrivateRoute>
                <DashboardRoutes/>
              </PrivateRoute>}
            />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
