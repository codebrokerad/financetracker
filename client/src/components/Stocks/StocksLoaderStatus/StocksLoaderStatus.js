import React from 'react'

const StocksLoaderStatus = props => {
  if(props.connectionError) {
    return (
      <div>
        <span >Market closed. </span>
        <br />(Come back later))
      </div>
    );
  } else {
    return (
      <div>
      Live Data
      </div>
    );
  }
}

export default StocksLoaderStatus;