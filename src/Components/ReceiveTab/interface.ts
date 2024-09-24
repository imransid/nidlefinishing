export interface Breakdown {
  qcQty: number;
  size: string;
  color: string;
  balance: number;
  totalReceived: number;
}

export interface Detail {
  orderId: number;
  styleId: number;
  breakdowns: Breakdown[];
  style: string;
  varienceId: number;
  customer: string;
  po: string;
  totalReceive: number;
  totalQcQty: number;
  totalFinishAlter: number;
  totalFinishAlterReceive: number;
}

export interface Data {
  totalQcQty: number;
  totalReceive: number;
  lineId: number;
  details: Detail[];
}

export interface QmsStockView {
  data: Data;
  message: string;
}

export interface StockViewItem {
  item: Detail;
  index: number;
  separators: Record<string, unknown>; // Adjust this if the separators structure is more specific
}
