// Libraries
import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class CopyPreview extends Component<{}, {}> {
    render() {
        return (
            <div>
              <Button color="primary">Копирај</Button>{' '}
            </div>
        );
    }
}