  import Home from "./pages/home/Home";
  import Login from "./pages/login/Login";
  import List from "./pages/list/List";
  import Users from "./pages/user/Users";
  import Products from "./pages/products/Products";
  import Orders from "./pages/orders/Orders";
  import Delivery from "./pages/delivery/Delivery";
  import New from "./pages/new/New";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { productInputs, userInputs, orderInputs, deliveryInputs } from "./formSource";
  import { useContext } from "react";
  import { DarkModeContext } from "./context/darkModeContext";
  import "./style/dark.scss";

  function App() {
    const { darkMode } = useContext(DarkModeContext);

    return (
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              {/* login page */}
              <Route path="login" element={<Login />} />
              {/* user list */}
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Users />} />
                <Route path="new" element={<New inputs={userInputs} />} />
              </Route>
              {/* product details */}
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Products />} />
                <Route path="new" element={<New inputs={productInputs} />} />
              </Route>
              {/* orders details */}
              <Route path="orders">
                <Route index element={<List />} />
                <Route path=":orderId" element={<Orders />} />
                <Route path="new" element={<New inputs={orderInputs} />} />
              </Route>
              {/* delivery details */}
              <Route path="delivery">
                <Route index element={<List />} />
                <Route path=":deliveryId" element={<Delivery />} />
                <Route path="new" element={<New inputs={deliveryInputs} />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
