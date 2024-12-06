import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import RenderData from './component/RenderData.jsx';
import Registration from './component/Registration.jsx';
import DeleteData from './component/DeleteData.jsx';
import PutData from './component/PutData.jsx';
import store from "./store/store.js"
import Login from './component/Login.jsx'
  // Relative path to the index.js
  //router for the home 
  // Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main app component
    children: [
      {
        path: '/get', element: <RenderData />, // Route for rendering data
      },
      {
        path: '/post', element: <Registration />, // Route for registration (post)
      },
      {
        path: '/delete', element: <DeleteData />, // Route for deleting data
      },
      {
        path: '/put', element: <PutData />, // Route for updating data (put)
      },{
        path:'/login',element:<Login/>
      }
    ],
  },
]);

// Render the app with StrictMode, Provider, and RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);