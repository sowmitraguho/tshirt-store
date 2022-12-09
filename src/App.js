import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import About from "./components/About/About";
import Main from "./Layout/Main";
import Shop from "./components/Shop/Shop";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      
      children: [
        {
          path: '/',
          loader: () => fetch('tshirt.json'),
          element: <Shop></Shop>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*',
      element: <h1>What are you searching baby?</h1>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
