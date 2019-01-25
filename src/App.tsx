import React, { Component } from 'react';
import './App.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';

interface State {
  startDate: Date,
  endDate: Date
  author: string;
  title: string;
  tags: string;
  category: string;
  selectedOption: string;
}

class App extends Component<any, State> {
  constructor(p: any) {
    super(p)
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      author: "",
      title: "",
      tags: "",
      category: "",
      selectedOption: "option1",
    }

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleStartDateChange(date: Date) {
    this.setState({
      startDate: date
    });
  }

  handleEndDateChange(date: Date) {
    this.setState({
      endDate: date
    });
  }

  handleOptionChange(changeEvent: any) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleInputChange(e: any) {
    this.setState({ [e.target.name]: e.target.value } as State)
  }

  render() {
    let state = this.state;
    let isDisabled = state.selectedOption === 'option1';
    let now = new Date();

    return (
      <div className="container">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="mt-5">алатката</h3>
        </div>
        <hr />
        <div className="row">
          <div className="col-7 mt-3">
            <Form>
              <FormGroup tag="fieldset">
                <Label className="label-text">Сакам да објавам: </Label>
                <FormGroup check>
                  <Label inline>
                    <Input value="option1" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option1'} type="radio" name="radio1" />{' '}
                    Блог пост
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label inline>
                    <Input value="option2" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option2'} type="radio" name="radio2" />{' '}
                    Настан
                </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup>
                <Label className="label-text" for="exampleEmail">Наслов</Label>
                <Input onChange={this.handleInputChange} type="text" name="title" id="titleField" placeholder="Учиме да лемиме!" />
              </FormGroup>
              <FormGroup>
                <Label className="label-text" for="exampleEmail">Објавил</Label>
                <Input onChange={this.handleInputChange} type="text" name="author" id="authorField" placeholder="Некојси" />
              </FormGroup>
              <FormGroup>
                <Label className="label-text" for="exampleEmail">Лепенки</Label>
                <Input onChange={this.handleInputChange} type="text" name="tags" id="tagsField" placeholder="electronics soldering" disabled={!isDisabled} />
              </FormGroup>
              <FormGroup>
                <Label className="label-text" for="exampleEmail" >Категорија</Label>
                <Input onChange={this.handleInputChange} type="text" name="category" id="categoryField" placeholder="electronics" disabled={!isDisabled} />
              </FormGroup>

              <div className="row">
                <div className="col-6">
                  <FormGroup>
                    <Label className="label-text">Почеток на настанот: </Label>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleStartDateChange}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      timeCaption="time"
                      disabled={isDisabled}
                    />
                  </FormGroup>
                </div>
                <div className="col-6">
                  <FormGroup>
                    <Label className="label-text">Крај на настанот:</Label>
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={this.handleEndDateChange}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      timeCaption="time"
                      disabled={isDisabled}
                    />

                  </FormGroup>
                </div>
              </div>
            </Form>

          </div>
          <div className="col-5 preview-col">
            <div className="preview">
              <p>---</p>
              {isDisabled ? <p id="type">layout: blog_post </p> : <p id="type">layout: event_post </p>}
              <p id="author">title: "{this.state.title}" </p>
              <p id="author">author: "{this.state.author}"</p>
              {isDisabled ? <p id="date">date: {now.toISOString().split('.')[0] + "Z"} </p> : null}
              {isDisabled ? null : (
                <div>
                  <p id="start_date">start_date: {this.state.startDate.toISOString().split('.')[0] + "Z"} </p>
                  <p id="end_date">end_date: {this.state.endDate.toISOString().split('.')[0] + "Z"}</p>
                </div>
              )}
              {isDisabled ? (
                <div>
                  <p id="tags">tags: "{this.state.tags}" </p>
                  <p id="category">category: "{this.state.category}" </p>
                </div>
              ) : null}

              <p>---</p>
            </div>
            <div>
              <Button color="primary">Копирај</Button>{' '}
            </div>
            <div className="infoPanel">
              <hr />
              <p>Built with ♥ for the <a href="http://blog.spodeli.org">#skopjehacklab</a> by <a href="https://lh.mk">lh.mk</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
