
import { Route, Routes } from "react-router-dom";
 export const MainRouters  = ({ array }: any) => {
  const recursiveRoutes = (routes: any) => {
    return (
      <>
        {routes.map((route: any) => {
          const path = route.path;
          const Element = route.component;
          return (
            <Route  path={path} element={<Element />}>
              {route.children ? recursiveRoutes(route.children) : <></>}
            </Route>
          );
        })}
      </>
    );
  };
  
  return (
    <>
    <Routes>
        {array.map((route: any) => {
          const path = route.path;
          const Element = route.component;
          return (
            <Route path={path} element={<Element />}>
              {route.children
                ? recursiveRoutes(route.children) : <></>}
            </Route>
          );
        })}
      </Routes>
    </>
  );
};
