import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.countValue);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  return (
    <section>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        AddAmonut
      </button>
    </section>
  );
};

export default Counter;

//Extension ile rafce yapip tab yaptim

//useSelector -> store icindeki state'leri okumak icin kullanilir
