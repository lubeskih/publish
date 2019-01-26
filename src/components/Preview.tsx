// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from '../Store';

interface IProps {
  store: Store;
}

@observer
export class Preview extends Component<IProps, {}> {
  constructor (props: IProps) {
    super(props);
  }

  render() {
    let store = this.props.store;

    return (
      <div className="preview">
        <p>---</p>
        <p id="author">title: "{store.title}" </p>
        <p id="author">author: "{store.author}"</p>
        {store.check === 'eventPost' ? ( // is event post radio button selected? If yes:
          <div>
            <p id="type">layout: event_post </p>
            <p id="start_date">start_date: "{store.eventStartDate}" </p>
            <p id="end_date">end_date: "{store.eventEndDate}"</p>
          </div>
        ) : (
          // if not; then it must be a blog post
          <div>
            <p id="type">layout: "{store.typeOfPageLayout}" </p>
            <p id="date">date: "{store.date}"</p>
            <p id="tags">tags: "{store.tags}" </p>
            <p id="category">category: "{store.category}" </p>
          </div>
        )}
        <p>---</p>
      </div>
    );
  }
}
