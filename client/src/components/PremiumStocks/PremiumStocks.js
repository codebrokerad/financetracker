import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
  /*if (rowData) {
    return (
      <div className="ag-theme-alpine" style={{ height: 4000, width: 6000 }}>
        <AgGridReact onGridReady={onGridReady} rowData={rowData}>
          <AgGridColumn field="name"></AgGridColumn>
          <AgGridColumn field="symbol"></AgGridColumn>
          <AgGridColumn field="price"></AgGridColumn>
        </AgGridReact>
      </div>
    );
  }*/
  return (
    <div>
      {rowData ? (
        <div className="ag-theme-alpine" style={{ height: 4000, width: 6000 }}>
          <AgGridReact onGridReady={onGridReady} rowData={rowData.data}>
            <AgGridColumn field="name"></AgGridColumn>
            <AgGridColumn field="symbol"></AgGridColumn>
            <AgGridColumn field="price"></AgGridColumn>
          </AgGridReact>
        </div>
      ) : null}
    </div>
  )
};

export default PremiumStocks;
