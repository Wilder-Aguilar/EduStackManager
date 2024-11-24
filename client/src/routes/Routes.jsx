import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Enrollments from "../pages/Enrollments";

export const router = createBrowserRouter([ 
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/courses",
                element: <Courses />,
            },
            {
                path: "/enrollments",
                element: <Enrollments />,
            }
        ],
    },
]); 