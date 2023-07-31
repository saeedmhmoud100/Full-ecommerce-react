import {Navigate, Route, Routes} from "react-router-dom";
import ForgetPasswordPage from "../Pages/Auth/ForgetPasswordPage";
import VerifyResetCodePage from "../Pages/Auth/VerifyResetCodePage";
import ResetPasswordPage from "../Pages/Auth/ResetPasswordPage";
import LoginPage from "../Pages/Auth/LoginPage";
import RegisterPage from "../Pages/Auth/RegisterPage";

const AuthRoutes = ({isLoggedOut}) => ( // URL is: user/*
    isLoggedOut ?
        <Routes>
            <Route path={'login/'} element={<LoginPage />} />
            <Route path={'register/'} element={<RegisterPage />} />
            <Route path={'forget-password/'} element={<ForgetPasswordPage />} />
            <Route path={'verify-code/'} element={<VerifyResetCodePage />} />
            <Route path={'reset-password/'} element={<ResetPasswordPage />} />
        </Routes>
        :
        <Routes>
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
);

export default AuthRoutes;