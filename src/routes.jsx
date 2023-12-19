import { createBrowserRouter } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: '/signin',
        element: <SignInPage />,
    },
    {
        path: '/forgot-password',
        element: <ForgotPasswordPage />,
    },

]);