import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from '../shared/common/routes.ts';
import { WithAuth } from '../shared/hocs';
//TODO:
const LOADER = undefined;
export const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path={ROUTES.ROOT} loader={LOADER}>*/}
        <Route
          index
          path={ROUTES.AUTH}
          // element={<AuthPage />}
          element={<div>Auth Page</div>}
          loader={LOADER}
        />
        <Route path={ROUTES.HOME} element={WithAuth(<div>Home Page</div>)} loader={LOADER} />
        <Route path={ROUTES.MY_GALLERY} element={WithAuth(<div>My gallery page</div>)} loader={LOADER} />
        <Route path={ROUTES.PROFILE} element={WithAuth(<div>Profile Page</div>)} loader={LOADER} />
        <Route path={ROUTES.GALLERIES} element={WithAuth(<div>GALLERIES PAGE</div>)} loader={LOADER} />
        {/*</Route>*/}
      </Routes>
    </BrowserRouter>
  );
};
