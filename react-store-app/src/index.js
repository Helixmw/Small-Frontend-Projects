import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import About from './components/About';
import ProductInfo from './components/ProductInfo';
import HomeLayout from './Layouts/HomeLayout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path:"/",
    element: (<HomeLayout/>),
    children: [
      {
        path:"",
        element: (<Home/>)
      }
    ]
  },
  {
    path:"/about",
    element: (<HomeLayout/>),
    children: [
      {
        path:"",
        element: (<About/>)
      }
    ]
  },
  {
    path:"/product/:id",
    element: (<HomeLayout/>),
    children:[
      {
      path:"",
      element:(<ProductInfo/>)
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
