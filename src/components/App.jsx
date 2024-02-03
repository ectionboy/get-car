import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../redux/cars/operations";
import { fetchFavorites } from "../redux/favorite/operations";

const Catalog = lazy(() => import("./Catalog/Catalog"));
const Favorites = lazy(() => import("./Favorites/Favorites"));


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <Suspense fallback={"Loading....."}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<NotFound />} />      
      </Routes>
    </Suspense>
  );
};
