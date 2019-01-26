// Libraries
import React from 'react';
import { Alert } from 'reactstrap';
import { observer } from "mobx-react";

// Store
import { Store } from "../Store";

interface IProps {
  store: Store;
}

@observer
export class CopyAlert extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="mt-3">
        <Alert color="primary" isOpen={this.props.store.visible} fade={true}>
          Успешно копирано!
        </Alert>
      </div>
    );
  }
}