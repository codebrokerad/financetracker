import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import StockService from "../../services/stock-service";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const PremiumStocks = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);
  const stockService = new StockService();

  useEffect(() => {
    stockService.getStocks().then((res) => setRowData(res));
  }, []);


  useEffect(() => {
    console.log(rowData);
  }, [rowData]);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }
  return (
    <div>
      {rowData ? (
        <div className="ag-theme-alpine" style={{ height: 1000, width: 1000 }}>
        Tips of the month of December
        1) This month semiconductor stocks are on fire. Make sure you buy stocks AMD and QCOM.
        2) Software as a service companies are struggling and losing value each day. You may sell stocks of BIGC and DAO.
        3) MRNA and Biontech are ready to transport their vaccines if FDA approves the emergency authorization on December 17. You can hold the stocks.
          <AgGridReact onGridReady={onGridReady} rowData={rowData.data}>
            <AgGridColumn field="name"></AgGridColumn>
            <AgGridColumn field="symbol"></AgGridColumn>
            <AgGridColumn field="price"></AgGridColumn>
            <AgGridColumn field="range"></AgGridColumn>
          </AgGridReact>
        </div>
      ) : null}
    </div>
  );
};

export default PremiumStocks;
