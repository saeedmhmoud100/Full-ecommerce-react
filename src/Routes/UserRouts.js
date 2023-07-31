import {Navigate, Route, Routes} from "react-router-dom";
import UserAllOrdersPage from "../Pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "../Pages/User/UserFavoriteProductsPage";
import UserAllAddressesPage from "../Pages/User/UserAllAddressesPage";
import UserAddAddressPage from "../Pages/User/UserAddAdressPage";
import UserEditAddressPage from "../Pages/User/UserEditAddressPage";
import UserProfilePage from "../Pages/User/UserProfilePage";

const UserRoutes = ({isUser}) => ( // URL is: user/*
    isUser ?
            <Routes>
                <Route path={'allorders'} element={<UserAllOrdersPage />} />
                <Route path={'favoriteproducts'} element={<UserFavoriteProductsPage />} />
                <Route path={'addresses'} element={<UserAllAddressesPage />} />
                <Route path={'add-address'} element={<UserAddAddressPage />} />
                <Route path={'edit-address/:id'} element={<UserEditAddressPage />} />
                <Route path={'profile'} element={<UserProfilePage />} />
            </Routes>
        :
            <Routes>
                    <Route
                        path="*"
                        element={<Navigate to={localStorage.getItem('token') ? '/' : "/auth/login"} replace />}
                    />
            </Routes>
);

export default UserRoutes;