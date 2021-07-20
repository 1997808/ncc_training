import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AdminRoute } from "./pages/backend/index"

import { ProtectedPage } from "./pages/backend/protectedPage";
import { PrivateRoute } from "./utils/privateRoute";
import { LoginPage } from "./pages/login";
// import { AuthButton } from "./components/authButton";
import { ProvideAuth } from "./utils/provideAuth"
import { Home } from "./pages/client/index"
import { Product } from "./pages/client/product"
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
            <Switch>
              <Route path="/public">
                <Product />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <PrivateRoute path="/protected">
                <ProtectedPage />
              </PrivateRoute>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}