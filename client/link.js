import React from 'react';

export default class Link extends React.Component {
  render() {
    return (
      <a {...this.props}>
        {this.props.children}
      </a>
    );
  }
}
