import { fork } from 'redux-saga/effects';
import appSagas from 'scenes/App/sagas';

export default function* rootSaga() {
  const appSagasForks = appSagas.map((saga) => fork(saga));

  yield [
    ...appSagasForks,
  ];
}
