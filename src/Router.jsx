import App from './App.jsx'
import "./index.css";
import Find from './Find.jsx';
import { createBrowserRouter } from "react-router-dom";
import Slider from './HomePage/Slider.jsx';
import Login from './UserSetup/Login.jsx';
import Register from './UserSetup/Register.jsx';
import Stats from './HomePage/Stats.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <>
            <Slider></Slider>
            <Stats></Stats>
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
      ]
    },

    {
      path: "/find",
      element: <Find></Find>,
    },
  ]);

export default router;