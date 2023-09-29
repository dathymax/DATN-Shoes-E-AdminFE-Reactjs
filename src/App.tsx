import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout";
import AuthPage from "./pages/auth";
import DashboardPage from "./pages/dashboard";
import SettingPage from "./pages/setting";

function App() {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/setting" element={<SettingPage />} />
                <Route path="/setting/:id" element={<SettingPage />} />
            </Route>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/*" element={<AdminLayout />} />
        </Routes>
    );
}

export default App;
