import React from 'react';

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
      </div>
    );
  }

  _renderParentResult() {
    const parentResult = this.props.parentResult;
    return (
      <div>
        <a href={parentResult.url} target='_blank'>
          {parentResult.displayText}
        </a>
        &nbsp;in {parentResult.path}
      </div>
    );
  }

  _renderChildResultList() {
    if (!this.props.childResults || this.props.childResults.length <= 0) {
      return null;
    }

    return this.props.childResults.map(this._renderChildResult);
  }

  _renderChildResult(result, index) {
    return (
      <div key={index}>
        <a href={result.url} target='_blank'>
          &nbsp;- {result.displayText}
        </a>
      </div>
    );
  }
}
