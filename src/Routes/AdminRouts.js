import {Route, Routes} from "react-router-dom";
import AdminAllProductsPages from "../Pages/Admin/AdminAllProductsPage";

const AdminRoutes = () => ( // URL is: admin/*
    <Routes>
        <Route path={'allProducts'} element={<AdminAllProductsPages />} />
    </Routes>
);

export default AdminRoutes;