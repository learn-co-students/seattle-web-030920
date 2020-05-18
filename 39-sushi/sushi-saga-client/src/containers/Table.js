import React, { Fragment } from 'react'

const Table = (props) => {

  const {wallet, emptyPlates} = props

  const renderPlates = () => {
    return emptyPlates.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates()
          }
        </div>
      </div>
    </Fragment>
  )
}

// Table.displayName = 'John'

export default Table