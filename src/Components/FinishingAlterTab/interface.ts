export interface Breakdown {
  rcvQty: number;
  size: string;
  color: string;
  varienceId: number;
  balanceQty: number;
}

export interface AlterAPIDetails {
  orderId: number;
  styleId: number;
  breakdowns: Breakdown[];
  style: string;
  customer: string;
  po: string;
}
