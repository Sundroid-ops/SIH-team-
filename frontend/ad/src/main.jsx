import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Register/index.jsx'
import LogIn_Farmer from './Register/LogIn_Farmer.jsx'
import LogIn_Buyer from './Register/LogIn_Buyer.jsx'
import SignIn_Buyer from './Register/SignIn_Buyer.jsx'
import SignIn_Farmer from './Register/SignIn_Farmer.jsx'
import Hero_Buyer from './Components/Hero/Hero_Buyer.jsx'
import Hero_Farmer from './Components/Hero/Hero_Farmer.jsx'
import Buyer_Profile from './Profile/Buyer_Profile.jsx'
import Farmer_Profile from './Profile/Farmer_Profile.jsx'
import Buyer_Cart from './Components/Buyer_Cart.jsx'
import ProductDetail from './Product/ProductsDetails.jsx'
import History_Farmer from './Components/History/History_Farmer.jsx'
import History_Buyers from './Components/History/History_Buyers.jsx'
// import Buyer_Payment from './Payment/Buyer_Payment.jsx'
import Farmer_about from './Components/About/Farmer_about.jsx'
import Buyer_about from './Components/About/Buyer_about.jsx'
import Buyer_Contact from './Components/Contact/Buyer_Contact.jsx'
import Farmer_Contact from './Components/Contact/Farmer_Contact.jsx'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login/farmer',
      element: <LogIn_Farmer />
    },
    {
      path: '/login/buyer',
      element: <LogIn_Buyer />
    },
    {
      path: '/signup/farmer',
      element: <SignIn_Farmer />
    },
    {
      path: '/signup/buyer',
      element: <SignIn_Buyer />
    },
    {
      path: '/home/farmer',
      element: <Hero_Farmer />
    },
    {
      path: '/home/buyer',
      element: <Hero_Buyer />
    },
    {
      path: '/farmer/about',
      element: <Farmer_about/>
    },
    {
      path: '/buyer/about',
      element: <Buyer_about/>
    },
    {
      path: '/farmer/contact',
      element: <Farmer_Contact />
    },
    {
      path: '/buyer/contact',
      element: <Buyer_Contact />
    },
    {
      path: '/profile/farmer',
      element: <Farmer_Profile />
    },
    {
      path: '/profile/buyer',
      element: <Buyer_Profile/>
    },
    {
      path: '/history/farmer',
      element: <History_Farmer/>
    },
    {
      path: '/history/buyer',
      element: <History_Buyers/>
    },
    {
      path: '/buyer_cart',
      element: <Buyer_Cart/>
    },
    {
      path: '/product_details',
      element: <ProductDetail/>
    },
    // {
    //   path: '/buyer_payment',
    //   element: <Buyer_Payment/>
    // },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)