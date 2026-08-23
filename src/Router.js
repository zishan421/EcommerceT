import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import RootLayout from "./RootLayout";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export const Router = createBrowserRouter([
   {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "productDetails/:id", Component: ProductDetails },
      { path: "cart", Component: Cart },
      { path: "wishlist", Component: Wishlist },
      { path: "signup", Component: Signup },
      { path: "login", Component: Login },
      
    ],
  },
]);