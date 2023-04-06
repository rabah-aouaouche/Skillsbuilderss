import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Layouts/layout";
import Formations from "./pages/Formations";
import Evenement from "./pages/Evenement";
import Calendrier from "./pages/Calendrier";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Formations",
    element: <Formations />,
  },
  {
    path: "/Evenement",
    element: <Evenement />,
  },
  {
    path: "/Calendrier",
    element: <Calendrier />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
