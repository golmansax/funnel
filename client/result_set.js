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
      <div className={styles.parentResult}>
        <a href={parentResult.url} target='_blank'>
          {parentResult.displayText}
        </a>
        {this._renderPath(parentResult.path)}
      </div>
    );
  }

  _renderPath(path) {
    if (!path) { return null; }
    return <span>&nbsp;in {path}</span>;
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
      <div className={styles.childResult} key={index}>
        <a href={result.url} target='_blank'>
          &nbsp;- {result.displayText}
        </a>
      </div>
    );
  }
}
