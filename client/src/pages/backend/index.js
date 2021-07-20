import React from "react";
import {
  Switch,
  useRouteMatch
} from "react-router-dom";
import { ProtectedPage } from "./protectedPage";
import { PrivateRoute } from "../../utils/privateRoute";
import { Page404 } from "../page404"

export function AdminRoute() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <PrivateRoute exact path={path}>
        <ProtectedPage />
      </PrivateRoute>
      <PrivateRoute path={`${path}/protected`}>
        <ProtectedPage />
      </PrivateRoute>
      <PrivateRoute path="*">
        <Page404 />
      </PrivateRoute>
    </Switch>
  );
}