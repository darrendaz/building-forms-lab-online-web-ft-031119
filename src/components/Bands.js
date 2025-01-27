import React from 'react'

const Bands = props => {
  return (
    <div>
      {props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>;
      })}
    </div>
  )
}

export default Bands
