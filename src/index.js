import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import App from './App.js'
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import ErrorScreen from './screens/ErrorScreen.js';

import Home from './screens/Home2.js';
import Contact from './screens/Contact.js';

import ItemScreen from './screens/ItemScreen.js';
import Item from './screens/Item.js';

import CadastrarScreen from './screens/CadastrarScreen.js';
import Login from './screens/Login.js';
import CamerasScreen from './screens/CamerasScreen.js';
import Logout from './screens/Logout.js';
import InlineComponent from './screens/InlineComponent.js';
import SearchCamera from './screens/SearchCamera.js';
import AddCamera from './screens/AddCamera.js';
import ExemploCss from './screens/ExemploCss.js';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorScreen/>,
        children: [
            {
                path: "/",
                element: <Home />
              },
              {
                path: "contact",
                element: <Contact />
              },
              {
                path: "inlinecomponent",
                element: <InlineComponent />
              },              
              {
                path: "addcamera",
                element: <AddCamera />
              },              
              {
                path: "searchcamera",
                element: <SearchCamera />
              },
              {
                path: "exemplocss",
                element: <ExemploCss />
              },              
              {
                path: "itens",
                element: <ItemScreen />
              },    
              {
                path: "/item/:id",
                element: <Item />
            },
            {
              path: "/login",
              element: <Login />
            },              
            {
                path: "/cadastrar",
                element: <CadastrarScreen />
            },  
            {
                path: "/cameras",
                element: <CamerasScreen />
            },                  
            {
                path: "/logout",
                element: <Logout />
            },                              
              {
                path:"oldpage",
                element: <Navigate to="/" />
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
