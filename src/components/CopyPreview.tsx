// Libraries
import React, { Component } from "react";
import { Button } from "reactstrap";
import * as clipboard from 'clipboard';

// Store
import { Store } from "../Store";

interface IProps {
  store: Store
}

export class CopyPreview extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  copyToClipboard = (e: any) => {
    let toClipboard: string;

    if (this.props.store.check === 'blogPost') {
      toClipboard = `---
      title: ${this.props.store.title}
      author: ${this.props.store.author}
      layout: ${this.props.store.typeOfPageLayout}
      date: ${this.props.store.date}
      tags: ${this.props.store.tags}
      category: ${this.props.store.category}
      ---`;
    } else if (this.props.store.check === 'eventPost') {
      toClipboard = `---
      title: ${this.props.store.title}
      author: ${this.props.store.author}
      layout: ${this.props.store.typeOfPageLayout}
      start_date: ${this.props.store.eventStartDate}
      end_date: ${this.props.store.eventEndDate}
      ---`;
    }
  }

  render() {
    return (
      <div>
        <Button color="primary">Копирај</Button>{" "}
      </div>
    );
  }
}