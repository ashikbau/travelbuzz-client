import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Edit from "../../Pages/Edit/Edit";
import Register from "../../Pages/LogIn/Register/Register";
import MyReview from "../../Pages/MyReview";
import Review from "../../Review/Review";
import ShowReview from "../../Review/ShowReview/ShowReview";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import Services from "../../Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                loader: ()=> fetch('https://y-bay.vercel.app/services')
                
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
            },
            {
                path:'/servicess',
                element:<Services></Services>,
                loader: ()=> fetch('https://y-bay.vercel.app/servicess')
            },
            {
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader:({params})=> fetch(`https://y-bay.vercel.app/services/${params.id}`)


            },
            {
                path:'/review/:id',
                element:<PrivateRoute><Review></Review></PrivateRoute>,
                loader:({params})=> fetch(`https://y-bay.vercel.app/services/${params.id}`)
                
            },
            {
                path:"/reviews",
                element:<PrivateRoute><ShowReview></ShowReview></PrivateRoute>
            },
            {
                path:"/myreview",
                element:<MyReview></MyReview>
            },
            {
                path:"/edit/:id",
               
                element:<Edit></Edit>
            },
            {
                path:'/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
                loader: () => fetch('https://y-bay.vercel.app/addservice')
            }

            
        ]
    }
    
]);

export default router;