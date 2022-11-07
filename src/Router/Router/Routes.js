import Blog from "../../Pages/Blog/Blog";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");
const { default: Home } = require("../../Pages/Home/Home");
const { default: LogIn } = require("../../Pages/LogIn/LogIn");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
    
]);

export default router;