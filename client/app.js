import React from 'react';
import reqwest from 'reqwest';
import ResultSetList from './result_set_list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resultSets: [], query: '' };

    this._bindResultSets = this._bindResultSets.bind(this);
    this._updateQuery = this._updateQuery.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.query}
          onChange={(event) => this._updateQuery(event.target.value)}
        />
        <ResultSetList resultSets={this.state.resultSets} />
      </div>
    );
  }

  _updateQuery(query) {
    this.setState({ query: query });

    reqwest({
      url: '/result_sets',
      method: 'get',
      data: { query: query },
    }).then(this._bindResultSets);
  }

  _bindResultSets(data) {
    this.setState({ resultSets: data.resultSets });
  }
}
