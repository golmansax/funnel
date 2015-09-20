import React from 'react';
import reqwest from 'reqwest';
import ResultSetList from './result_set_list';
import styles from './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resultSets: [], query: '' };

    this._updateQuery = this._updateQuery.bind(this);
  }

  render() {
    return (
      <div className={styles.container}>
        <input
          type='text'
          value={this.state.query}
          onChange={(event) => this._updateQuery(event.target.value)}
          className={styles.input}
        />
        <ResultSetList resultSets={this.state.resultSets} />
      </div>
    );
  }

  _updateQuery(query) {
    this.setState({ query: query });

    reqwest({
      url: 'http://localhost:3000/result_sets',
      method: 'get',
      data: { query: query },
    }).then(this._bindResultSets.bind(this, query));
  }

  _bindResultSets(query, data) {
    if (this.state.query !== query) { return; }

    this.setState({ resultSets: data.resultSets });
  }
}
