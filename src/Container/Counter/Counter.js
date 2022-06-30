import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { decrement, increment } from '../../Redux/Action/Counter.action';

function Counter(props) {

    const dispatch = useDispatch()
    const store = useSelector(state => state.count)


    const handleincrement = () => {
        dispatch(increment())
    }

    const handledecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <Button onClick={() => handleincrement()}>+</Button>
            <p>{store.counter}</p>
            <Button onClick={() => handledecrement()}>-</Button>
        </div>
    );
}

export default Counter;