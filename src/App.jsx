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
import Layout from "./Layouts/layout";
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
  }

]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>

//       <Route index element={<Home />} />
//       <Route path="/Formations" element={<Formations />} />

//     </Route>
//   )
// );

function App() {
  return <RouterProvider router={router} />;
}

export default App;
