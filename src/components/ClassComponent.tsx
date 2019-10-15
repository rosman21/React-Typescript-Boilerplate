import React, { Component } from 'react';
import { IProps } from '../interfaces/IProps';

class ClassComponent extends Component<IProps> {
  public render() {
    const { name } = this.props;
    return (
      <div>{name.length > 0 ? `Hello from Class Component: ${name}` : ''}</div>
    );
  }
}

export default ClassComponent;
