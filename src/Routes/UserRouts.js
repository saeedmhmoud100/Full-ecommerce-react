import {Route, Routes} from "react-router-dom";
import UserAllOrdersPage from "../Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "../Pages/User/UserFavoriteProductsPage";
import UserAllAddressesPage from "../Pages/User/UserAllAddressesPage";
import UserAddAddressPage from "../Pages/User/UserAddAdressPage";

const UserRoutes = () => ( // URL is: admin/*
    <Routes>
        <Route path={'allorders'} element={<UserAllOrdersPage />} />
        <Route path={'favoriteproducts'} element={<UserFavoriteProductsPage />} />
        <Route path={'addresses'} element={<UserAllAddressesPage />} />
        <Route path={'add-address'} element={<UserAddAddressPage />} />

    </Routes>
);

export default UserRoutes;