import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Photo from "../Components/Photo/Photo";
import CardDetails from "../Components/CardDetails/CardDetails";
import Cake from "../Components/Cake/Cake";
import WeddingCard from "../Components/WeddingCard/WeddingCard";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                element: <CardDetails></CardDetails>,
                loader: ()=> fetch("/party.json")
            },
            {
                path:"/cake",
                element: <Cake></Cake>
            },
            {
                path:"/card",
                element: <WeddingCard></WeddingCard>
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