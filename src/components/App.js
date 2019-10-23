import React from 'react';
import Button from './Button';

import chroma from 'chroma-js';

export default class App extends React.Component {
  click(e) {
    console.log(e);
  }

  componentDidMount() {
    this.setState({
      baseColor: chroma.scale('GnBu').colors(1)[0],
    });
  }

  render() {
    return (
      <div className="px-4 py-2">
        <h1 className="text-2xl">{this.props.name}</h1>
        <Button className="mr-2">button</Button>
        <Button primary>primary button</Button>
      </div>
    );
  }
}
