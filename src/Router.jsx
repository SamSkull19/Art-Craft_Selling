import App from './App.jsx'
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Slider from './HomePage/Slider.jsx';
import Login from './UserSetup/Login.jsx';
import Register from './UserSetup/Register.jsx';
import Stats from './HomePage/Stats.jsx';
import Executives from './HomePage/Executives.jsx';
import AddCraftItems from './ProductEdit&List/AddCraftItems.jsx';
import CraftItemsList from './ProductEdit&List/CraftItemsList.jsx';
import CItemsDetail from './ProductEdit&List/CItemsDetail.jsx';
import AllCraftItems from './AllItemsList/AllCraftItems.jsx';
import MyCraftItems from './MyCraftItems/MyCraftItems.jsx';
import UpdateCraftList from './MyCraftItems/UpdateCraftList.jsx';
import ErrorPage from './ErrorPage.jsx';
import PrivateRoute from './PrivateRoute.jsx/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('http://localhost:5000/craftItems'),
        element: <>
          <Slider></Slider>
          <Stats></Stats>
          <CraftItemsList></CraftItemsList>
          <Executives></Executives>
        </>
      },

      {
        path: "/login",
        element: <>
          <Login></Login>
        </>
      },

      {
        path: "/register",
        element: <>
          <Register></Register>
        </>
      },

      {
        path: "/addCraftItems",
        element: <>
          <PrivateRoute><AddCraftItems></AddCraftItems></PrivateRoute>
        </>
      },

      {
        path: "/craftItemsDetail/:id",
        loader: () => fetch(`http://localhost:5000/craftItems/`),
        element: <>
          <PrivateRoute><CItemsDetail></CItemsDetail></PrivateRoute>
        </>
      },

      {
        path: "/allCraftItems",
        loader: () => fetch('http://localhost:5000/craftItems'),
        element: <>
          <AllCraftItems></AllCraftItems>
        </>
      },
      {
        path: "/myArt&CraftList",
        element: <>
          <PrivateRoute><MyCraftItems></MyCraftItems></PrivateRoute>
        </>
      },
      {
        path: "/updatePage/:id",
        loader: () => fetch(`http://localhost:5000/craftItems/`),
        element: <>
          <PrivateRoute><UpdateCraftList></UpdateCraftList></PrivateRoute>
        </>
      },
    ]
  },

]);

export default router;