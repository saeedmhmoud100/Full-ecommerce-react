import {Route, Routes} from "react-router-dom";
import UserAllOrdersPage from "../Pages/User/UserAllOrdersPage";

const UserRoutes = () => ( // URL is: admin/*
    <Routes>
        <Route path={'allorders'} element={<UserAllOrdersPage />} />

    </Routes>
);

export default UserRoutes;