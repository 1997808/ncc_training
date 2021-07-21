import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AdminRoute } from "./pages/backend/index"

// import { ProtectedPage } from "./pages/backend/protectedPage";
// import { PrivateRoute } from "./utils/privateRoute";
import { LoginPage } from "./pages/login";
// import { AuthButton } from "./components/authButton";
import { ProvideAuth } from "./utils/provideAuth"

import { UserLayout } from "./components/layout/userLayout"

import { Home } from "./pages/client/index"
import { Product } from "./pages/client/product"
import { ProductDetail } from "./pages/client/productDetail"
import { Page404 } from "./pages/page404"

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminRoute />
          </Route>
          {/* <AuthButton /> */}
          <Route>
            <UserLayout>
              <Switch>
                <Route path="/products">
                  <Product />
                </Route>
                <Route path="/product/:id">
                  <ProductDetail />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                {/* <PrivateRoute path="/protected">
                  <ProtectedPage />
                </PrivateRoute> */}
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="*">
                  <Page404 />
                </Route>
              </Switch>
            </UserLayout>
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}