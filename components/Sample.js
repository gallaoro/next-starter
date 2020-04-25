import { connect } from 'react-redux'
import { incrementCount, decrementCount } from '../misc/actions'

function Sample ({ state, incrementCount, decrementCount }) {
  return (
    <div>
      <code>
        {JSON.stringify(state)}
      </code>
      <br />
      <button className="p-4 bg-gray-500" onClick={incrementCount}>
        Increment
      </button>
      <button onClick={decrementCount}>
        Decrement
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sample)