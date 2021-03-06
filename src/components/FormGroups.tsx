// Libraries
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { observer } from "mobx-react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import moment from 'moment';

// Style
import "react-datepicker/dist/react-datepicker.css";

// Store
import { Store } from "../Store";

interface IProps {
  store: Store;
}

interface IState {
  eventStartDateLocalState: Date;
  eventEndDateLocalState: Date;
}

@observer
export class FormGroups extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      eventStartDateLocalState: new Date(),
      eventEndDateLocalState: new Date()
    };
  }

  handleStartDateChange = (date: Date) => {
    // Update store with string date
    // Date comes in UTC, adding 1 hour to convert to CEST
    this.props.store.eventStartDate = moment(date).add(1, 'hour').toISOString().split(".")[0] + "Z";

    // Update local state to Date
    this.setState({
      eventStartDateLocalState: date
    });
  };

  handleEndDateChange = (date: Date) => {
    // Update store with string date
    // Date comes in UTC, adding 1 hour to convert to CEST
    this.props.store.eventEndDate = moment(date).add(1, 'hour').toISOString().split(".")[0] + "Z";

    // Update local state to Date
    this.setState({
      eventEndDateLocalState: date
    });
  };

  handleOptionChange = (changeEvent: any) => {
    if (changeEvent.target.value === "blogPost") {
      this.props.store.check = "blogPost";
      // Date comes in UTC, adding 1 hour to convert to CEST
      this.props.store.date = moment(new Date()).add(1, 'hour').toISOString().split(".")[0] + "Z";
      this.props.store.typeOfPageLayout = "blog_post";
    } else if (changeEvent.target.value === "eventPost") {
      this.props.store.check = "eventPost";
      this.props.store.typeOfPageLayout = "event_post";
    }
  };

  handleInputChange = (e: any) => {
    // Is there any smarted way of doing this? :/
    if (e.target.name === "title") {
      this.props.store.title = e.target.value;
    } else if (e.target.name === "author") {
      this.props.store.author = e.target.value;
    } else if (e.target.name === "tags") {
      this.props.store.tags = e.target.value;
    } else if (e.target.name === "category") {
      this.props.store.category = e.target.value;
    }
  };

  render() {
    let store = this.props.store;

    return (
      <Form>
        <FormGroup tag="fieldset">
          <Label className="label-text">I would like to publish: </Label>
          <FormGroup check>
            <Label>
              <Input
                onChange={this.handleOptionChange}
                checked={store.check === "eventPost"}
                value="eventPost"
                type="radio"
                name="radio2"
              />{" "}
              Event
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label>
              <Input
                onChange={this.handleOptionChange}
                checked={store.check === "blogPost"}
                value="blogPost"
                type="radio"
                name="radio1"
              />{" "}
              Blog post
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label className="label-text" for="exampleTitle">
            Title
          </Label>
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="title"
            id="titleField"
            placeholder="We're learning to solder!"
          />
        </FormGroup>
        <FormGroup>
          <Label className="label-text" for="exampleAuthor">
            Published by:
          </Label>
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="author"
            id="authorField"
            placeholder="John Doe"
          />
        </FormGroup>

        {store.check === "blogPost" ? (
          <div>
            <FormGroup>
              <Label className="label-text" for="exampleTags">
                Labels
              </Label>
              <Input
                onChange={this.handleInputChange}
                type="text"
                name="tags"
                id="tagsField"
                placeholder="electronics soldering"
              />
            </FormGroup>
            <FormGroup>
              <Label className="label-text" for="exampleCategory">
                Category
              </Label>
              <Input
                onChange={this.handleInputChange}
                type="text"
                name="category"
                id="categoryField"
                placeholder="electronics"
              />
            </FormGroup>
          </div>
        ) : store.check === "eventPost" ? (
          <div className="row">
            <div className="col-6">
              <FormGroup>
                <Label className="label-text">The event starts at: </Label>
                <DatePicker
                  selected={this.state.eventStartDateLocalState}
                  onChange={this.handleStartDateChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                />
              </FormGroup>
            </div>
            <div className="col-6">
              <FormGroup>
                <Label className="label-text">The event ends at:</Label>
                <DatePicker
                  selected={this.state.eventEndDateLocalState}
                  onChange={this.handleEndDateChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                />
              </FormGroup>
            </div>
          </div>
        ) : null }
      </Form>
    );
  }
}