// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Formations from "./pages/Formations";
import Evenement from "./pages/Evenement";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/Formations",
    element : <Formations/>
  },
  {
    path: "/Evenement",
    element: <Evenement/>
  },


]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
