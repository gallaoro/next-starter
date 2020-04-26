import React from 'react';
import { connect } from 'react-redux';

import { loadData, loadDataThenNavigate } from '../misc/actions';

import Button from './presenational/Button';

function LoadData({ loadData, loadDataThenNavigate }) {
  return (
    <div className="flex my-4">
      <Button action={loadData} tailwindClasses="bg-yellow-500 mr-4">
        Load data
      </Button>
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
