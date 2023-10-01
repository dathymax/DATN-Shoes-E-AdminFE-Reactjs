import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout";
import AuthPage from "./pages/auth";
import DashboardPage from "./pages/dashboard";
import SettingPage from "./pages/setting";
import ProductListPage from "./pages/product/list";
import ProductCategoriesPage from "./pages/product/categories";
import ManageTransactionPage from "./pages/transaction/manage-transaction";
import ManageReturnsPage from "./pages/transaction/manage-returns";
import CustomersPage from "./pages/customers";
import AddProductPage from "./pages/product/add-product";
import ProductAddCategoryPage from "./pages/product/add-category";

function App() {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/setting" element={<SettingPage />} />
                <Route path="/setting/:id" element={<SettingPage />} />
                <Route
                    path="/products/list-products"
                    element={<ProductListPage />}
                />
                <Route
                    path="/products/categories"
                    element={<ProductCategoriesPage />}
                />
                <Route
                    path="/products/add-product"
                    element={<AddProductPage />}
                />
                <Route
                    path="/products/update-product/:id"
                    element={<AddProductPage />}
                />
                <Route
                    path="/products/add-category"
                    element={<ProductAddCategoryPage />}
                />
                <Route
                    path="/products/update-category/:id"
                    element={<ProductAddCategoryPage />}
                />
                <Route
                    path="/transaction/manage-transaction"
                    element={<ManageTransactionPage />}
                />
                <Route
                    path="/transaction/manage-returns"
                    element={<ManageReturnsPage />}
                />
                <Route path="/customers" element={<CustomersPage />} />
            </Route>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/*" element={<AdminLayout />} />
        </Routes>
    );
}

export default App;
