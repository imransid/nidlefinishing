import React, {FC, useState} from 'react';
import DataTableComponent from '../../Components/DataTableComponent/DataTableComponent';

const ReceiveTab: FC = () => {
  const testData = [
    {
      color: 'White',
      size: 'M',
      inputQty: 1000,
      qcQty: 900,
      totalReceive: 500,
      balanceQty: 500,
      receiveQty: 0,
    },
    {
      color: 'Black',
      size: 'L',
      inputQty: 2000,
      qcQty: 1900,
      totalReceive: 1000,
      balanceQty: 1000,
      receiveQty: 0,
    },
  ];
  return (
    <>
      <DataTableComponent
        buyer="Buyer"
        buyerName="Brothers Fashion Ltd."
        style="Style"
        styleName="Brother-5060OD"
        order="PO"
        orderNumber="PO-5623147855"
        showCheckbox={true}
        columnNames={[
          'Color',
          'Size',
          'Input Qty.',
          'QC Qty.',
          'Total Receive',
          'Balance Qty.',
          'Receive Qty.',
        ]}
        rowData={testData}
      />
    </>
  );
};

export default ReceiveTab;
