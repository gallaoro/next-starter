import React from 'react';
import { connect } from 'react-redux';
import { loadData, loadDataThenNavigate } from '../misc/actions';

function LoadData({ loadData, loadDataThenNavigate }) {
  return (
    <div className="flex my-4">
      <button type="button" className="p-4 bg-yellow-500 rounded mr-4 w-1/2" onClick={loadData}>
        Load data
      </button>
      <button type="button" className="p-4 bg-blue-500 text-white rounded w-1/2" onClick={loadDataThenNavigate}>
        Load data then navigate
      </button>
    </div>
  );
}


const mapDispatchToProps = {
  loadData,
  loadDataThenNavigate,
};

export default connect(null, mapDispatchToProps)(LoadData);
