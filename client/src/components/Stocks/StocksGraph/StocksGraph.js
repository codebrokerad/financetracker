import React from 'react'
import {Line} from 'react-chartjs-2';
import { chartJsConfig, chartColors, chartDataset } from '../chartConfig/ChartConfig.js'

class StocksGraph extends React.Component {

  updateChart = () => {
    let chart = this.refs.chart.chartInstance;

    if(Object.keys(this.props.stocks).length === 0)
    {
      chart.data.datasets = [];
      return chart.update();
    }

    Object.keys(this.props.stocks).map((stock_name, index) =>
    {
      let current_stock = this.props.stocks[stock_name];
      let chart_dataset = chart.data.datasets.find((dataset) => {
        return dataset.label === stock_name.toUpperCase()
      });

      if(current_stock.is_selected)
      {
        let current_stock = this.props.stocks[stock_name];
        if(chart_dataset)
        {
          chart_dataset.data = this.getStockValues(current_stock);
        }
        else
        {
          if(current_stock)
          {
            chart.data.datasets = chart.data.datasets.concat(
              [
                chartDataset(stock_name, chartColors[index], this.getStockValues(current_stock))
              ]
            )
          }
        }
      }
      else
      {
        if(chart_dataset)
        {
          chart.data.datasets.splice(chart.data.datasets.indexOf(chart_dataset), 1);
        }
      }
      chart.update();
    })
  }

  componentDidUpdate = () => {
    this.updateChart();
  }
  getStockValues = (stock) =>{
    return stock.history.map((history) => {
      return {t: new Date(history.time), y: history.value};
    })
  }

  render() {
    return (
      <div>
          <div>
            Graph
          </div>
        <div>
          <Line
            data={{datasets: []}}
            options={chartJsConfig}
            ref='chart'
          />
        </div> 
      </div>
    );
  }
}

export default StocksGraph;