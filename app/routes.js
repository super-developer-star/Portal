// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

import { logout } from 'scenes/App/actions/authActions';
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'Fleet Location',
      getComponent(nextState, cb) {
        import('scenes/FleetLocationsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/logout',
      name: 'Logout',
      onEnter(nextState, replace, next) {
        store.dispatch(logout());
        replace('/');
        next();
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}

/*
Route creation example

{
  path: '/',
  name: 'home',
  getComponent(nextState, cb) {
    const importModules = Promise.all([
      import('containers/HomePage/reducer'),
      import('containers/HomePage/sagas'),
      import('containers/HomePage'),
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([reducer, sagas, component]) => {
      injectReducer('home', reducer.default);
      injectSagas(sagas.default);

      renderRoute(component);
    });

    importModules.catch(errorLoading);
  },
},

and simple page

{
  path: '/features',
  name: 'features',
  getComponent(nextState, cb) {
    import('containers/FeaturePage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
},

*/
