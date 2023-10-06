import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Photo from "../Components/Photo/Photo";
import CardDetails from "../Components/CardDetails/CardDetails";


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
        ]
    }
])

export default router;