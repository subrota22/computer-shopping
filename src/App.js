
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Loaders } from './components/Loaders/Loaders';
import Product from './components/Product/Product';
import Products from './components/Products/Products';
import Review from './components/Review/Review';
import Main from './Main/Main';
// import {BeatLoader} from "react-spinners/BeatLoader";
function App() {
const router = createBrowserRouter([
  {path:"/" , element: <Main></Main> , children:[
    {path:"/" , 
    loader:async () => fetch("computer.json") 
    , element: <Products></Products>} , 
    {path:"/product" , element:<Product></Product>} ,
    {path:"/review" 
    ,  
    loader:Loaders , 
    
   element:<Review></Review>}
  ]}
]) ;
return (
  <div>
    <RouterProvider router={router} ></RouterProvider>
  </div>
)
}

export default App;
