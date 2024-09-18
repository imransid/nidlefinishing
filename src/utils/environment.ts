// Rafa
const BASE_URL = 'http://192.168.10.53:8081';

const SIGN_IN_URL = 'auth/login';
const FINISHING_ORG = 'api/finishingOrg';
const FINISHING_PROCESS_LIST = 'api/v1/getFinishingProcessList';
const SUMMARY = 'api/v1/getTodaysFinishingSummary';
const FINISHING_STATUS = 'api/v1/getFinishingStatus';
const ORG_TREE = 'api/org:loggedUserOrgtree';
const CONFIRM_RECEIVE_REQUEST = 'api/v1/confirmReceiveRequest';

const GET_QMS_STOCK_FOR_RECEIVE = 'api/v1/getQmsStockForReceive?lineId=';
const GET_FINISHING_ALTER_LIST = 'api/v1/getFinishingAlterList';
const SEND_TO_ALTER = 'api/v1/sendToAlter';

const GET_FINISHING_ALTER_RECEIVE_LIST = 'api/v1/getFinishingAlterReceiveList';

// http://localhost:8081/api/v1/getFinishingAlterReceiveList?lineId=2002&date=2024-09-12 12:00:15
export {
  BASE_URL,
  SIGN_IN_URL,
  FINISHING_ORG,
  FINISHING_PROCESS_LIST,
  SUMMARY,
  ORG_TREE,
  GET_QMS_STOCK_FOR_RECEIVE,
  FINISHING_STATUS,
  CONFIRM_RECEIVE_REQUEST,
  GET_FINISHING_ALTER_LIST,
  SEND_TO_ALTER,
  GET_FINISHING_ALTER_RECEIVE_LIST,
};
