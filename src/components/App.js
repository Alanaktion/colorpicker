import React from 'react';
import Button from './Button';

export default class App extends React.Component {
  render() {
    return (
      <div className="px-4 py-2">
        <h1 className="text-2xl">{this.props.name}</h1>
        <Button>button</Button>
        <Button primary>primary button</Button>
      </div>
    );
  }
}
