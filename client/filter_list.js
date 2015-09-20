import React from 'react';
import Filter from './filter';

export default class FilterList extends React.Component {
  render() {
    const filters = this.props.filters.filter((filter) => {
      return filter.name !== 'retailer';
    }).slice(0, 2);

    return <div>{filters.map(this._renderFilter)}</div>;
  }

  _renderFilter(filter, index) {
    return <Filter {...filter} key={index} />;
  }
}
