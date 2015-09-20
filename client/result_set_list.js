import React from 'react';
import ResultSet from './result_set';

export default class ResultSetList extends React.Component {
  render() {
    return (
      <div>
        {this.props.resultSets.slice(0, 5).map(this._renderResultSet)}
      </div>
    );
  }

  _renderResultSet(resultSet, index) {
    return <ResultSet {...resultSet} key={index} />;
  }
}
