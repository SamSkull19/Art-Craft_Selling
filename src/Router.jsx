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
import AllCraftCategory from './AllCraftCategory/AllCraftCategory.jsx';
import AllCraftCategoryList from './AllCraftCategory/AllCraftCategoryList.jsx';
import CategoryItemDetail from './AllCraftCategory/CategoryItemDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('https://neff-roxx-server-afa7i0hfc-sifat-samins-projects.vercel.app/craftItems'),
        element: <>
          <Slider></Slider>
          <Stats></Stats>
          <CraftItemsList></CraftItemsList>
          <AllCraftCategory></AllCraftCategory>
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
        loader: () => fetch(`https://neff-roxx-server-afa7i0hfc-sifat-samins-projects.vercel.app/craftItems/`),
        element: <>
          <PrivateRoute><CItemsDetail></CItemsDetail></PrivateRoute>
        </>
      },

      {
        path: "/allCraftItems",
        loader: () => fetch('https://neff-roxx-server-afa7i0hfc-sifat-samins-projects.vercel.app/craftItems'),
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
        loader: () => fetch(`https://neff-roxx-server-afa7i0hfc-sifat-samins-projects.vercel.app/craftItems/`),
        element: <>
          <PrivateRoute><UpdateCraftList></UpdateCraftList></PrivateRoute>
        </>
      },
      {
        path: "/allCraftCategory/:id",
        loader: () => fetch(`https://neff-roxx-server-afa7i0hfc-sifat-samins-projects.vercel.app/craftItemCategory`),
        element: <>
          <AllCraftCategoryList></AllCraftCategoryList>
        </>
      },
      {
        path: "/allCraftCategoryDetail/:id",
        loader: () => fetch(`https://neff-roxx-server-afa7i0hfc-sifat-samins-projects.vercel.app/craftItemCategory`),
        element: <>
          <CategoryItemDetail></CategoryItemDetail>
        </>
      },
    ]
  },

]);

export default router;