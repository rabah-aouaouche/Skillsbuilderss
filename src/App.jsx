import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
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
<<<<<<< HEAD
    element: <Evenement/>
  },


]);

=======
    element: <Evenement />,
  },
  {
    path: "/Calendrier",
    element: <Calendrier />,
  },
]);
>>>>>>> 8b2c4038f4a670cd5008e3c0055b70928b63c546

function App() {
  return <RouterProvider router={router} />;
}

export default App;
