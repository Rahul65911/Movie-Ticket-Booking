import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Navbar comapanyName="Book My Show" />
    <Outlet />
  </>
);

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/AboutUs",
          element: <AboutUs />
        },
        {
          path: "/ContactUs",
          element: <ContactUs />
        },
        {
          path: "/Login",
          element: <Login />
        },
        {
          path: "/SignUp",
          element: <SignUp />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;