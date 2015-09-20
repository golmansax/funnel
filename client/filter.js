import React from 'react';
import styles from './filter.css';
import Link from './link';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this._renderFacets = this._renderFacets.bind(this);
  }

  render() {
    return (
      <div className={styles.filter}>
        <div className={styles.filterHeader}>by {this.props.displayName}</div>
        <div className={styles.facetGrid}>{this._renderFacets()}</div>
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
      <div className={styles.facetContainer} key={index}>
        <Link className={styles.facet} href={facet.url}>
          {facet.name}
          <div className={styles.facetCount}>{facet.count} results</div>
        </Link>
      </div>
    );
  }
}
