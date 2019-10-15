import React, { FunctionComponent } from 'react';
import { IProps } from '../interfaces/IProps';

const FunctionalComponent: FunctionComponent<IProps> = props => {
  const { name } = props;
  return (
    <div>
      {name.length > 0 ? `Hello from functional Component: ${name}` : ''}
    </div>
  );
};

export default FunctionalComponent;
