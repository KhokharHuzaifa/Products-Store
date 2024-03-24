import './App.css'
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import ProductsDetail from './Pages/ProductsDetail';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/productDetail/:productId' element={<ProductsDetail />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
