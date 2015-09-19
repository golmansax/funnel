import React from 'react';
import reqwest from 'reqwest';
import ResultSetList from './result_set_list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resultSets: [] };

    this._bindResultSets = this._bindResultSets.bind(this);
  }

  componentWillMount() {
    reqwest('/result_sets').then(this._bindResultSets);
  }

  render() {
    return <ResultSetList resultSets={this.state.resultSets} />;
  }

  _bindResultSets(data) {
    this.setState({ resultSets: data.resultSets });
  }
}
