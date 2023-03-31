import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Accueil from './Routes/Accueil';
import reportWebVitals from './reportWebVitals';
import Carousel from './Components/Carousel';
import Carte from './Components/Carte';
import Boissons from './Routes/Boissons';
import Plats from './Routes/Plats';
import Entrées from './Routes/Entrées';
import Desserts from './Routes/Desserts';
import Tout from './Routes/Tout';
import Contact from './Routes/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    children: [
      {
        path:"/",
        element:<Carousel />
      },
      {
        path:"/carte",
        element:<Carte />,
        children:[
          {path:"/carte/Plats",
        
        element:<Plats />},
      {path:"/carte/Boissons",
      element:<Boissons />
      },
      {path:"/carte/Entrées",
      element:<Entrées />
      },{path:"/carte/Desserts",
      element:<Desserts />
      },{path:"/carte",
      element:<Tout />
      }]},
      {
        path:'/Contact',
        element:<Contact />
      }

        ]
      }
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
