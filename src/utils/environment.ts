// Rafa
const BASE_URL = 'http://192.168.10.53:8081';

const SIGN_IN_URL = 'auth/login';
const FINISHING_ORG = 'api/finishingOrg';
const FINISHING_PROCESS_LIST = 'api/v1/getFinishingProcessList';
const SUMMARY = 'api/v1/getTodaysFinishingSummary';
const FINISHING_STATUS = 'api/v1/getFinishingStatus';
const ORG_TREE = 'api/org:loggedUserOrgtree';

const GET_QMS_STOCK_FOR_RECEIVE = 'api/v1/getQmsStockForReceive?lineId=';

export {
  BASE_URL,
  SIGN_IN_URL,
  FINISHING_ORG,
  FINISHING_PROCESS_LIST,
  SUMMARY,
  ORG_TREE,
  GET_QMS_STOCK_FOR_RECEIVE,
  FINISHING_STATUS,
};
