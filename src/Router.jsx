import App from './App.jsx'
import "./index.css";
import Find from './Find.jsx';
import { createBrowserRouter } from "react-router-dom";
import Slider from './HomePage/Slider.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          loader: () => fetch('RealEstateInfo.json'),
          element: <>
            <Slider></Slider>
          </>
        }
      ]
    },

    {
      path: "/find",
      element: <Find></Find>,
    },
  ]);

export default router;