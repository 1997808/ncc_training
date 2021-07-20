import React from "react";
import {
  Switch,
} from "react-router-dom";
import { ProtectedPage } from "./protectedPage";
import { PrivateRoute } from "../../utils/privateRoute";

export function AdminRoute() {
  return (
    <Switch>
      <PrivateRoute exact path="/">
        <ProtectedPage />
      </PrivateRoute>
      <PrivateRoute path="/protected">
        <ProtectedPage />
      </PrivateRoute>
    </Switch>
  );
}