import {Route, Routes} from "react-router-dom";
import UserAllOrdersPage from "../Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "../Pages/User/UserFavoriteProductsPage";
import UserAllAddressesPage from "../Pages/User/UserAllAddressesPage";

const UserRoutes = () => ( // URL is: admin/*
    <Routes>
        <Route path={'allorders'} element={<UserAllOrdersPage />} />
        <Route path={'favoriteproducts'} element={<UserFavoriteProductsPage />} />
        <Route path={'addresses'} element={<UserAllAddressesPage />} />

    </Routes>
);

export default UserRoutes;