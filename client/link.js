import React from 'react';

export default class Link extends React.Component {
  render() {
    const myTarget = document.domain.indexOf('walmart') >= 0 ? null : '_blank';
    return (
      <a {...this.props} target={myTarget}>
        {this.props.children}
      </a>
    );
  }
}
