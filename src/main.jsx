import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamingAPI from "./components/gaming api/GamingAPI.jsx";
import SignIn from "./components/signin/SignIn.jsx";
import Signup from "./components/signin/Signup.jsx";
import GamePage from "./components/Gaming Page/GamePage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <GamingAPI />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path:"/gamepage",
    element:<GamePage/>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
