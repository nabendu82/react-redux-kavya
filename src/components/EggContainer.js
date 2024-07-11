import React from 'react'
import { buyEgg } from '../redux/egg/eggActions'
import { connect } from 'react-redux'

const EggContainer = props => {
  return (
    <div>
        <h1>Number of Eggs - {props.numOfEggs}</h1>
        <button onClick={props.buyEgg}>Buy Egg</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfEggs: state.numOfEggs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyEgg: () => dispatch(buyEgg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggContainer)