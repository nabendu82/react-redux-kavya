import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyChicken } from '../redux/chicken/chickenActions'

const HookChickenContainer = () => {
    const numOfChicken = useSelector(state => state.chicken.numOfChicken)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Number of Hook Chicken - {numOfChicken}</h1>
            <button onClick={() =>  dispatch(buyChicken())}>Buy Chicken</button>
        </div>
    )
}

export default HookChickenContainer