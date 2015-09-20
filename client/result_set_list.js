import React from 'react';
import ResultSet from './result_set';
import styles from './result_set_list.css';

export default class ResultSetList extends React.Component {
  render() {
    return (
      <div className={styles.resultSetList}>
        {this.props.resultSets.slice(0, 5).map(this._renderResultSet)}
      </div>
    );
  }

  _renderResultSet(resultSet, index) {
    return <ResultSet {...resultSet} key={index} />;
  }
}
