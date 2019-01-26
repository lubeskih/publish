// Libraries
import React, { Component } from "react";
import { Button } from "reactstrap";

// Store
import { Store } from "../Store";

interface IProps {
  store: Store
}

export class CopyPreview extends Component<IProps, {}> {
  toClipboard: string = '';

  constructor(props: IProps) {
    super(props);
    
  }

  copyToClipboard = (e: any) => {

    // I need to find a better way of doing this I guess
    if (this.props.store.check === 'blogPost') {
      this.toClipboard = `---\ntitle: ${this.props.store.title}\nauthor: ${this.props.store.author}\nlayout: ${this.props.store.typeOfPageLayout}\ndate: ${this.props.store.date}\ntags: ${this.props.store.tags}\ncategory: ${this.props.store.category}\n---`;
    } else if (this.props.store.check === 'eventPost') {
      this.toClipboard = `---\ntitle: ${this.props.store.title}\nauthor: ${this.props.store.author}\nlayout: ${this.props.store.typeOfPageLayout}\nstart_date: ${this.props.store.eventStartDate}\nend_date: ${this.props.store.eventEndDate}\n---`;
    }

    console.log(this.toClipboard);
  }

  render() {
    return (
      <div>
        <Button onClick={this.copyToClipboard} color="primary">Копирај</Button>{" "}
      </div>
    );
  }
}