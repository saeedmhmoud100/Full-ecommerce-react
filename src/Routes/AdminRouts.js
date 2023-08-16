import {Navigate, Route, Routes} from "react-router-dom";
import AdminAllProductsPages from "../Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPages from "../Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "../Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "../Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "../Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "../Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "../Pages/Admin/AdminAddProductPage";
import AdminUpdateProductPage from "../Pages/Admin/AdminUpdateProductPage";
import AdminCouponsPage from "../Pages/Admin/AdminCouponsPage";
import AdminProfilePage from "../Pages/Admin/AdminProfilePage";
import AdminAllUsersPage from "../Pages/Admin/AdminAllUsersPage";

const AdminRoutes = ({isAdmin}) => { // URL is: admin/*
    return(
        isAdmin ?
            <Routes>
                <Route path={'profile'} element={<AdminProfilePage />} />
                <Route path={'allProducts'} element={<AdminAllProductsPages/>}/>
                <Route path={'addproduct'} element={<AdminAddProductPage/>}/>
                <Route path={'updateproduct/:id'} element={<AdminUpdateProductPage/>}/>
                {/*<Route path={'updateproduct/:id'} element={<AdminUpdateProductPage/>}/>*/}
                <Route path={'allorders'} element={<AdminAllOrdersPages/>}/>
                <Route path={'allorders/:id'} element={<AdminOrderDetailsPage/>}/>
                <Route path={'addbrand'} element={<AdminAddBrandPage/>}/>
                <Route path={'addcategory'} element={<AdminAddCategoryPage/>}/>
                <Route path={'addsubcategory'} element={<AdminAddSubCategoryPage/>}/>
                <Route path={'coupons'} element={<AdminCouponsPage/>}/>
                <Route path={'allusers'} element={<AdminAllUsersPage/>}/>


                {/* ////////////  using Outlet //////////// */}
                {/*<Route path='' element={<AdminMainContainerPage />} >*/}
                {/*    <Route path={'addproduct'} element={<AdminAddProduct/>}/>*/}
                {/*    <Route path={'updateproduct/:id'} element={<AdminUpdateProduct/>}/>*/}
                {/*    <Route path={'allorders'} element={<AdminAllOrders/>}/>*/}
                {/*    <Route path={'allorders/:id'} element={<AdminOrderDetails/>}/>*/}
                {/*    <Route path={'coupons'} element={<AdminCoupons/>}/>*/}
                {/*    <Route path={'allusers'} element={<AdminAllUsers/>}/>*/}
                {/*</Route>*/}


            </Routes>
            :
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to={localStorage.getItem('token') ? '/Full-ecommerce-react' : "Full-ecommerce-react/auth/login"} replace />}
                />
            </Routes>
    )
};

export default AdminRoutes;