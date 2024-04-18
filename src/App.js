import React from 'react';
// import  ReactDOM  from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';
import { CartProvider } from './components/ContextReducer';
// import Cart from './screen/Cart';
import MyOrder from './screen/MyOrder';
import About from './screen/About';
import Faqs from './screen/Faqs';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/myOrder",
      element:<MyOrder/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/faqs",
      element:<Faqs/>
    }
  ]);

  return (
    <CartProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
    {/* <RouterProvider router={router} /> */}
    </React.StrictMode>
    </CartProvider>
    
  );
}

export default App;
