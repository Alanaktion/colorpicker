import React from 'react';

export default class Button extends React.Component {
  render() {
    let color = 'bg-gray-300 hover:bg-gray-400 text-gray-800';
    if (this.props.primary) {
      color = 'bg-blue-500 hover:bg-blue-700 text-white';
    }
    let className = color + ' font-bold py-2 px-4 rounded ';
    className += this.props.className;
    return (
      <button type="button" onClick={this.props.onClick} className={className}>
        {this.props.children}
      </button>
    );
  }
}
