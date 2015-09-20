import React from 'react';
import FilterList from './filter_list';
import styles from './result_set.css';

export default class ResultSet extends React.Component {
  constructor(props) {
    super(props);
    this._renderParentResult = this._renderParentResult.bind(this);
    this._renderChildResultList = this._renderChildResultList.bind(this);
  }

  render() {
    return (
      <div>
        {this._renderParentResult()}
        {this._renderChildResultList()}
        {this._renderFilters(this.props.parentResult.filters)}
      </div>
    );
  }

  _renderParentResult() {
    const parentResult = this.props.parentResult;
    return (
      <a className={styles.parentResult} href={parentResult.url} target='_blank'>
        {parentResult.displayText}
        {this._renderPath(parentResult.path)}
      </a>
    );
  }

  _renderPath(path) {
    if (!path) { return null; }
    return <div className={styles.path}>in {path}</div>;
  }

  _renderChildResultList() {
    if (!this.props.childResults || this.props.childResults.length <= 0) {
      return null;
    }

    return this.props.childResults.slice(0, 3).map(this._renderChildResult);
  }

  _renderFilters(filters) {
    if (!filters || filters.length <= 0) { return null; }
    return <FilterList filters={filters} />;
  }

  _renderChildResult(result, index) {
    return (
      <a className={styles.childResult} key={index} href={result.url} target='_blank'>
        {result.displayText}
      </a>
    );
  }
}
