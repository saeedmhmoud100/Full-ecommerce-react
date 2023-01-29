import {Route, Routes} from "react-router-dom";
import AdminAllProductsPages from "../Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPages from "../Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "../Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "../Pages/Admin/AdminAddBrandPage";

const AdminRoutes = () => ( // URL is: admin/*
    <Routes>
        <Route path={'allProducts'} element={<AdminAllProductsPages />} />
        <Route path={'allorders'}  element={<AdminAllOrdersPages />} />
        <Route path={'allorders/:id'} element={<AdminOrderDetailsPage />} />
        <Route path={'addbrand'} element={<AdminAddBrandPage />} />


    </Routes>
);

export default AdminRoutes;