import { createBrowserRouter } from "react-router-dom";
import Login from "../Layout/Login/Login";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Chefs from "../Pages/Chafs/Chefs";
import Checkout from "../Pages/Checkout/Checkout/Checkout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import FAQ from "../Pages/FAQ/FAQ";
import Gallery from "../Pages/Gallery/Gallery";
import GrindMagicMenu from "../Pages/GrindMagicMenu/GrindMagicMenu/GrindMagicMenu";
import Home from "../Pages/HomePage/Home/Home";
import Reservation from "../Pages/Reservation/Reservation";
import Products from "../Pages/Shop/Products/Products";
import ShopCard from "../Pages/ShopCard/ShopCard";
import Story from "../Pages/Story/Story";

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
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>
            },
            {
                path: '/story',
                element: <Story></Story>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/shop-checkout',
                element: <Checkout></Checkout>
            },
            {
                path: '/shop-card',
                element: <ShopCard></ShopCard>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])