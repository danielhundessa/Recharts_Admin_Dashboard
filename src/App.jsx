import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './styles/global.scss'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import Home from './pages/home/Home.jsx'
import Users from './pages/users/Users.jsx'
import Products from './pages/products/Products.jsx'
import Login from './pages/login/Login.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Menu from './components/menu/Menu.jsx'
import Product from "./pages/product/Product.jsx";
import User from "./pages/user/User.jsx";

const queryClient = new QueryClient();

function App() {
  function Layout() {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
