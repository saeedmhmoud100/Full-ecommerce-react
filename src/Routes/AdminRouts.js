import {Route, Routes} from "react-router-dom";
import AdminAllProductsPages from "../Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPages from "../Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "../Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "../Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "../Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "../Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "../Pages/Admin/AdminAddProductPage";

const AdminRoutes = () => ( // URL is: admin/*
    <Routes>
        <Route path={'allProducts'} element={<AdminAllProductsPages />} />
        <Route path={'allorders'}  element={<AdminAllOrdersPages />} />
        <Route path={'allorders/:id'} element={<AdminOrderDetailsPage />} />
        <Route path={'addbrand'} element={<AdminAddBrandPage />} />
        <Route path={'addcategory'} element={<AdminAddCategoryPage />} />
        <Route path={'addsubcategory'} element={<AdminAddSubCategoryPage />} />
         <Route path={'addproduct'} element={<AdminAddProductPage />} />
    </Routes>
);

export default AdminRoutes;