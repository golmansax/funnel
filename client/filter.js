import React from 'react';
import styles from './filter.css';
import Link from './link';
import lookupImage from './lookup_image';

const CATEGORY_MAP = {
  "Men's Shoes": { category: true, color: true }
};

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this._renderFacets = this._renderFacets.bind(this);
    this._wantImage = this._wantImage.bind(this);
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
    return facetValues.slice(0, 3).map(this._renderFacet.bind(this));
  }

  _renderFacet(facet, index) {
    if (this._wantImage(this.props.name)) {
      return this._renderFacetWithImage(facet, index);
    }

    return this._renderFacetWithoutImage(facet, index);
  }

  _renderFacetWithImage(facet, index) {
    return (
      <div className={styles.facetContainer} key={index}>
        <Link className={styles.facet} href={facet.url}>
          <img
            src={lookupImage(this.props.name, facet.name)}
            className={styles.facetImage}
          />
          <div className={styles.facetText}>
            <div>{facet.name}</div>
            <div className={styles.facetCount}>{facet.count} results</div>
          </div>
        </Link>
      </div>
    );
  }

  _renderFacetWithoutImage(facet, index) {
    return (
      <div className={styles.facetContainer} key={index}>
        <Link className={styles.facet} href={facet.url}>
          <div>{facet.name}</div>
          <div className={styles.facetCount}>{facet.count} results</div>
        </Link>
      </div>
    );
  }

  _wantImage(filterName) {
    const lookup = CATEGORY_MAP[this.props.categoryName];
    return (lookup && lookup[filterName]);
  }
}
