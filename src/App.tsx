import { Navigate, Route, Routes } from "react-router-dom"
import AdminLayout from "./layout"
import AuthPage from "./pages/auth"
import { getUserEmail } from "./helpers"

function App() {
    const userEmail = getUserEmail();

    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<>Hello</>} />
            </Route>
            <Route path="/auth" element={!userEmail ? <AuthPage /> : <Navigate to={"/"} />} />
            <Route path="/*" element={<AdminLayout />} />
        </Routes>
    )
}

export default App
