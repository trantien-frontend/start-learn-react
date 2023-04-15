import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increment, incrementByAmount } from './counterSlice';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '0 5px',
  },
});

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const { root } = useStyles();

  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncrease = () => {
    const action = increment();
    dispatch(action);
  };

  const handleDecrease = () => {
    const action = decrease();
    dispatch(action);
  };

  const handleAmount = () => {
    const action = incrementByAmount(5);
    dispatch(action);
  };
  return (
    <div>
      <h3>Counter Feature</h3>
      <p>{count}</p>
      <Button className={root} onClick={handleIncrease}>
        increase
      </Button>
      <Button className={root} onClick={handleDecrease}>
        decrease
      </Button>
      <Button className={root} onClick={handleAmount}>
        increaseAmount
      </Button>
    </div>
  );
}

export default CounterFeature;
