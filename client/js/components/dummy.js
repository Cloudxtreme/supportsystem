import React from 'react';

export class Dummy extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
  	console.log('creating dummy')
    super(props);
  }

  render() {
  	console.log('rendering dummy')
    return (
      <div>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      </div>
    );
  }
}
