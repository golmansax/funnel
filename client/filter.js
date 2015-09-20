import React from 'react';
import styles from './filter.css';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this._renderFacets = this._renderFacets.bind(this);
  }

  render() {
    return (
      <div className={styles.filter}>
        <h3>{this.props.displayName}</h3>
        {this._renderFacets()}
      </div>
    );
  }

  _renderFacets() {
    const facetValues = this.props.facetValues;
    if (!facetValues || facetValues.length <= 0) { return null; }
    return facetValues.slice(0, 4).map(this._renderFacet);
  }

  _renderFacet(facet, index) {
    return (
      <div className={styles.facet} key={index}>
        <a href={facet.url} target='_blank'>{facet.name} {facet.count}</a>
      </div>
    );
  }
}
