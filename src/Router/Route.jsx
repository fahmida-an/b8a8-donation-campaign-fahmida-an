import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Card from "../Pages/Card/Card";
import SearchCategory from "../Pages/SearchCard/SearchCategory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
     
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path : "/cards/:id",
        element :<Card></Card>,
        loader:()=>fetch("/data.json") 
    },
    {
      path: "/searchdata",
      element: <SearchCategory></SearchCategory>
    }
    ],
  },
]);
export default myCreatedRoute;
