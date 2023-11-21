import { Route, RouteObject, createRoutesFromElements } from 'react-router-dom';
import Main from '../pages/main/Main';
import DetailsSection from '../widgets/detailsSection/DetailsSection';
import loadCardDetails from '../widgets/detailsSection/loadCardDetails';
import { AppContextProvider } from '../shared/lib/AppContext';
import SearchParamsDisplay from './SearchParamsDisplay';
import Page404 from '../pages/page404/Page404';

const getTestRoutes = (): RouteObject[] => {
  return createRoutesFromElements(
    <Route
      path="/"
      element={
        <AppContextProvider>
          <div>
            <Main />
            <SearchParamsDisplay />
          </div>
        </AppContextProvider>
      }
      errorElement={
        <div className="error-message">
          <div className="error-message__content">Something went wrong :(</div>
        </div>
      }
    >
      <Route path="product/:id" element={<DetailsSection />} loader={loadCardDetails} />
      <Route path="*" element={<Page404 />} />,
    </Route>,
  );
};
export default getTestRoutes;
