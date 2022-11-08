import Blog from "../../Pages/Blog/Blog";
import Register from "../../Pages/LogIn/Register/Register";

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
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:5000/services')
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
    
]);

export default router;