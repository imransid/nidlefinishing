// Import necessary functions and types
import { all } from 'redux-saga/effects';

// import { checkLoader, loginSaga, syncNow } from './sagas/auth.saga';
// import {
//   alterQualityTransactionsList,
//   getReportColorValue,
//   passQualityTransactionsList,
//   submitQueryTransaction,
//   undoLastTransaction,
//   undoQueryTransaction
// } from './sagas/endTableCheck.saga';
// import { getGraphData } from './sagas/graphData.saga';
// import { syncLunchTimeNow } from './sagas/lanchTimeMange.saga';
// import { offlineCurrentCustomersQuery } from './sagas/offline.currentCustomersQuery';
// import { offlineOrderEnticesQuery } from './sagas/offline.OrderEnticesQuery';
// import { getVariance } from './sagas/variance.saga';
// Create a watcher saga
function* watchGetUserAction(): Generator {
  // yield takeEvery('users/getUserAction', loginSaga);
  // // pass button press
  // yield takeEvery('endTableCheck/sendQueryTransactionsAction', passQualityTransactionsList);
  // yield takeEvery('endTableCheck/undoQueryTransactionsAction', undoQueryTransaction);
  // yield takeEvery('endTableCheck/sendAlterTransactionsAction', alterQualityTransactionsList);
  // yield takeEvery('endTableCheck/sendRejectTransactionsAction', alterQualityTransactionsList);
  // yield takeEvery('getTodaysHourWiseProductionBar/getGraphDataAction', getGraphData);
  // yield takeEvery('endTableCheck/submitAllSyncDataAction', submitQueryTransaction);
  // yield takeEvery('endTableCheck/updateTransactionAction', undoQueryTransaction);
  // yield takeEvery('setting/getOrderEnticesQuery', offlineOrderEnticesQuery);
  // yield takeEvery('setLineStyle/getOfflineCurrentCustomersQuery', offlineCurrentCustomersQuery);
  // yield takeEvery('endTableCheck/getReportColorValue', getReportColorValue);
  // // for stop loader
  // yield takeEvery('users/checkLoaderAction', checkLoader);
  // // sync data
  // yield takeEvery('setting/syncNow', syncNow);
  // yield takeEvery('setting/getLunchTime', syncLunchTimeNow);
  // yield takeEvery('setting/getVarianceSetting', getVariance);
  // yield takeEvery('endTableCheck/undoLastTransaction', undoLastTransaction);
}

// Export the root saga
export default function* rootSaga(): Generator {
  yield all([
    watchGetUserAction()
    // Add other watchers if needed
  ]);
}
