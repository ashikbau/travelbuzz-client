import Blog from "../../Pages/Blog/Blog";
import Register from "../../Pages/LogIn/Register/Register";
import MyReview from "../../Pages/MyReview";
import Review from "../../Review/Review";
import ShowReview from "../../Review/ShowReview/ShowReview";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import Services from "../../Services/Services";

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
            },
            {
                path:'/servicess',
                element:<Services></Services>,
                loader: ()=> fetch('http://localhost:5000/servicess')
            },
            {
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)


            },
            {
                path:'/review/:id',
                element:<Review></Review>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
                
            },
            {
                path:"/reviews",
                element:<ShowReview></ShowReview>
            },
            {
                path:"/myreview",
                element:<MyReview></MyReview>
            }

            
        ]
    }
    
]);

export default router;