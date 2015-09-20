import React from 'react';
import Filter from './filter';

export default class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this._renderFilter = this._renderFilter.bind(this);
  }

  render() {
    const filters = this.props.filters.filter((filter) => {
      return filter.name !== 'retailer';
    }).slice(0, 3);

    return <div>{filters.map(this._renderFilter)}</div>;
  }

  _renderFilter(filter, index) {
    return <Filter categoryName={this.props.categoryName} {...filter} key={index} />;
  }
}
