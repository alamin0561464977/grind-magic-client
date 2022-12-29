import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Gallery from "../Pages/Gallery/Gallery";
import GrindMagicMenu from "../Pages/GrindMagicMenu/GrindMagicMenu/GrindMagicMenu";
import Home from "../Pages/HomePage/Home/Home";
import Reservation from "../Pages/Reservation/Reservation";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/grind-magic-menu',
                element: <GrindMagicMenu></GrindMagicMenu>
            },
            {
                path: '/reservation',
                element: <Reservation></Reservation>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            }
        ]
    }
])