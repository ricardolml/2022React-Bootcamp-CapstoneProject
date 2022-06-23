import { Route } from 'react-router-dom';

export const createRoutes = (routes) => {
  const arrRoute = routes.map(({ path, Component, to, childs }) => {
    return (
      <Route key={to} path={path} element={<Component />}>
        {childs && createRoutes(childs)}
      </Route>
    );
  });

  return arrRoute;
};
