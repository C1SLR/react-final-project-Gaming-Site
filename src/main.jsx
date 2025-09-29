import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamingAPI from "./components/gaming api/GamingAPI.jsx";
import SignIn from "./components/signin/SignIn.jsx";
import Signup from "./components/signin/Signup.jsx";
import GamePage from "./components/Gaming Page/GamePage.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.js";
import LockedRoutes from "./components/only for logged in user/LockedRoutes.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <GamingAPI />,
      },
      {
        path: "/game-details/:slug",
        element: (
          <LockedRoutes>
            <GamePage />
          </LockedRoutes>
        ),
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-lm6w7aovz3ylzsej.us.auth0.com"
      clientId="T8xJXgingaEBgUdfUX6rtZ23O3oQLrWT"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  </StrictMode>
);
