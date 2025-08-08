import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "./Pages/Layout/MainLayout";
import SimpleLayout from "./pages/Layout/SimpleLayout";
import Profile from "./Pages/Profile/Profile";

function App() {
  const currentUser = true;

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      element: <SimpleLayout />, 
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      element: (
        <ProtectedRoute>
          <MainLayout /> 
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <div>Feed Component Goes Here</div>,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
