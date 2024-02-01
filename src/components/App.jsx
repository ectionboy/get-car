import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";
import Layout from "./Layout/Layout";
import Favorites from "./Favorites/Favorites";
import NotFound from "./NotFound/NotFound";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<NotFound />} />      
      </Routes>
  );
};
