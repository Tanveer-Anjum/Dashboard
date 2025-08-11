
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TransectionPage from './pages/Transection/Transection';
import Support from './pages/Support/Support';





const router = createBrowserRouter([
  {
    path: "/",
    element:    <Dashboard />,
  },
  {
    path:"/TransectionPage",
    element:<TransectionPage/>
  },
    {
    path:"/Support",
    element:< Support/>
  }
]);
function App() {


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
