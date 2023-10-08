import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Photo from "../Components/Photo/Photo";
import CardDetails from "../Components/CardDetails/CardDetails";
import Cake from "../Components/Cake/Cake";
import WeddingCard from "../Components/WeddingCard/WeddingCard";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Components/Error/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/party.json')
            },
            {
                path: '/photo',
                element: <Photo></Photo>,
            },
            {
                path:"/details/:id",
                element: <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
                loader: ()=> fetch("/party.json")
            },
            {
                path:"/cake",
                element: <PrivateRoutes><Cake></Cake></PrivateRoutes>
            },
            {
                path:"/card",
                element: <PrivateRoutes><WeddingCard></WeddingCard></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;