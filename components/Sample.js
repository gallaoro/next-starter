import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, startClock, stopClock, reset } from '../misc/actions';
import DownloadControls from './DownloadControls';

function Sample({ state, incrementCount, decrement, startClock, stopClock, reset }) {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full mt-8">
      <div className="w-full md:w-1/2">
        <p className="text-md my-4">
          The app stores the <code>count</code> in the browser <code>localStore</code><br />
          Here is the current app state
        </p>
        <pre className="text-xs">
          {JSON.stringify(state, {}, 2)}
        </pre>
      </div>
      <div className="w-full md:w-1/2 px-8 ">
        <div className="flex">
          <button type="button" className="p-4 bg-green-500 rounded mr-4 w-1/2" onClick={incrementCount}>
            Increment
          </button>
          <button type="button" className="p-4 bg-red-500 rounded w-1/2" onClick={decrement}>
            Decrement
          </button>
        </div>
        <div className="flex my-4">
          <button type="button" className="p-4 bg-orange-500 rounded mr-4 w-1/2" onClick={startClock}>
            Start clock
          </button>
          <button type="button" className="p-4 bg-teal-500 rounded w-1/2" onClick={stopClock}>
            Stop clock
          </button>
        </div>
        <DownloadControls />
        <div className="flex my-4">
          <button type="button" className="p-4 bg-purple-500 text-white rounded mr-4 w-1/2" onClick={reset}>
            Reset
          </button>
          <div className="p-4 w-1/2" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {
  incrementCount,
  decrement: decrementCount,
  startClock,
  stopClock,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
