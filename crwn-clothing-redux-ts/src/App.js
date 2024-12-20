import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner.component";

//import Home from "./routes/home/home.component";
// import Shop from "./routes/shop/shop.component";
// import Checkout from "./routes/checkout/checkout.component";
// import Navigation from "./routes/navigation/navigation.component";
// import Authentication from "./routes/authentication/authentication.component";

const Home = lazy(() => import("./routes/home/home.component")); 
const Shop = lazy(() => import("./routes/shop/shop.component")); 
const Checkout = lazy(() => import("./routes/checkout/checkout.component")); 
const Navigation = lazy(() => import("./routes/navigation/navigation.component")); 
const Authentication = lazy(() => import("./routes/authentication/authentication.component")); 

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path="shop/*" element={<Shop />}/>
          <Route path="checkout" element={<Checkout />}/>
          <Route path="auth" element={<Authentication />}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
