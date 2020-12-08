import React, { useState } from "react";
import { Link } from "react-router-dom";
import StockService from "../../services/stock-service";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const MyAwesomeTable = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const service = new StockService();
  let data = service.getStocks();

  // let jsonObjectRes = JSON.stringify(data);
  // let parsedJSON = JSON.parse(data);

  const [rowData, setRowData] = useState([
    { name: data[0].name, symbol: data[0].symbol },
    { name: data[1].name, symbol: data[1].symbol },
    { name: data[2].name, symbol: data[2].symbol },
  ]);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact onGridReady={onGridReady} rowData={rowData}>
        <AgGridColumn field="name"></AgGridColumn>
        <AgGridColumn field="symbol"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default MyAwesomeTable;
