import { Navigate, Route, Routes } from "react-router-dom"
import AdminLayout from "./layout"
import AuthPage from "./pages/auth"
import { getUserEmail } from "./helpers"
import DashboardPage from "./pages/dashboard";
import SettingPage from "./pages/setting";

function App() {
    const userEmail = getUserEmail();

    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={userEmail ? <DashboardPage /> : <Navigate to={"/auth"} />} />
                <Route path="/dashboard" element={userEmail ? <DashboardPage /> : <Navigate to={"/auth"} />} />
                <Route path="/setting" element={userEmail ? <SettingPage /> : <Navigate to={"/auth"} />} />
            </Route>
            <Route path="/auth" element={!userEmail ? <AuthPage /> : <Navigate to={"/dashboard"} />} />
            <Route path="/*" element={<AdminLayout />} />
        </Routes>
    )
}

export default App
