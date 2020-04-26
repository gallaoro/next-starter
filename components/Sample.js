import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, startClock, stopClock } from '../misc/actions';

function Sample({ state, incrementCount, decrementCount, startClock, stopClock }) {
  return (
    <div>
      <code>
        {JSON.stringify(state)}
      </code>
      <br />
      <div className="flex">
        <button type="button" className="p-4 bg-green-500 rounded mr-4" onClick={incrementCount}>
          Increment
        </button>
        <button type="button" className="p-4 bg-red-500 rounded mr-4" onClick={decrementCount}>
          Decrement
        </button>
        <button type="button" className="p-4 bg-orange-500 rounded mr-4" onClick={startClock}>
          Start clock
        </button>
        <button type="button" className="p-4 bg-gray-500 rounded" onClick={stopClock}>
          Stop clock
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  startClock,
  stopClock,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
