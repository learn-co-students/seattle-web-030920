import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const { currentSushi, onGetNextSushi, customer, onEatSushi, isSushiEaten } = props;

  const renderSushi = () => {
    return currentSushi.map(sushi => {
      return (
        <Sushi
          sushi={sushi}
          onEatSushi={onEatSushi}
          isSushiEaten={isSushiEaten}
        />
      );
    })
  }

  return (
    <Fragment>
      <div className="belt">
      <p>Hello {customer}</p><br/>
        {renderSushi()}
        <MoreButton onGetNextSushi={onGetNextSushi} />
      </div>
    </Fragment>
  )
}

SushiContainer.defaultProps = {
  customer: "Hal",
  currentSushi: []
}

export default SushiContainer
