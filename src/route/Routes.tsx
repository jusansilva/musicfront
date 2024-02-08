import React from "react";
import { Routes as ListRoutes, Route } from "react-router-dom";
import PathRoutes from "./PathRoutes";
import PathScreens from "./PathScreens";

const Routes = () => {
  return (
    <React.Fragment>
      <ListRoutes>
        <Route path={PathRoutes.HOME} element={PathScreens.HOME} />
        <Route path={PathRoutes.ARTIST} element={PathScreens.ARTIST} />
        <Route path={PathRoutes.MUSIC} element={PathScreens.MUSIC} />
        <Route path={PathRoutes.ALBUM} element={PathScreens.ALBUM} />
      </ListRoutes>
    </React.Fragment>
  );
};

export default Routes;
