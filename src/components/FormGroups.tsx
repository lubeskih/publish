// Libraries
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { observer } from 'mobx-react';
import { Form, FormGroup, Label, Input } from "reactstrap";

// Style
import "react-datepicker/dist/react-datepicker.css";

@observer
export class FormGroups extends Component<{}, {}> {
  startDate = new Date();
  endDate = new Date();

  constructor(p: any) {
    super(p);
    this.state = {};
  }

  handleStartDateChange(date: Date) {
    this.startDate = date;

    this.setState({
      eventStartDate: date.toISOString().split(".")[0] + "Z"
    });
  }

  handleEndDateChange(date: Date) {
    this.endDate = date;

    this.setState({
      eventEndDate: date.toISOString().split(".")[0] + "Z"
    });
  }

  render() {
    return (
      <Form>
        <FormGroup tag="fieldset">
          <Label className="label-text">Сакам да објавам: </Label>
          <FormGroup check>
            <Label inline>
              <Input value="option1" type="radio" name="radio1" /> Блог пост
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label inline>
              <Input value="option2" type="radio" name="radio2" /> Настан
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label className="label-text" for="exampleTitle">
            Наслов
          </Label>
          <Input
            type="text"
            name="title"
            id="titleField"
            placeholder="Учиме да лемиме!"
          />
        </FormGroup>
        <FormGroup>
          <Label className="label-text" for="exampleAuthor">
            Објавил
          </Label>
          <Input
            type="text"
            name="author"
            id="authorField"
            placeholder="Некојси"
          />
        </FormGroup>
        <FormGroup>
          <Label className="label-text" for="exampleTags">
            Лепенки
          </Label>
          <Input
            type="text"
            name="tags"
            id="tagsField"
            placeholder="electronics soldering"
          />
        </FormGroup>
        <FormGroup>
          <Label className="label-text" for="exampleCategory">
            Категорија
          </Label>
          <Input
            type="text"
            name="category"
            id="categoryField"
            placeholder="electronics"
          />
        </FormGroup>

        <div className="row">
          <div className="col-6">
            <FormGroup>
              <Label className="label-text">Почеток на настанот: </Label>
              <DatePicker
                selected={this.startDate}
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
              <Label className="label-text">Крај на настанот:</Label>
              <DatePicker
                selected={this.endDate}
                onChange={this.handleStartDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              />
            </FormGroup>
          </div>
        </div>
      </Form>
    );
  }
}

// {/* <Form>
//   <FormGroup tag="fieldset">
//     <Label className="label-text">Сакам да објавам: </Label>
//     <FormGroup check>
//       <Label inline>
//         <Input value="option1" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option1'} type="radio" name="radio1" />{' '}
//         Блог пост
//       </Label>
//     </FormGroup>
//     <FormGroup check>
//       <Label inline>
//         <Input value="option2" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option2'} type="radio" name="radio2" />{' '}
//         Настан
//     </Label>
//     </FormGroup>
//   </FormGroup>

//   <FormGroup>
//     <Label className="label-text" for="exampleEmail">Наслов</Label>
//     <Input onChange={this.handleInputChange} type="text" name="title" id="titleField" placeholder="Учиме да лемиме!" />
//   </FormGroup>
//   <FormGroup>
//     <Label className="label-text" for="exampleEmail">Објавил</Label>
//     <Input onChange={this.handleInputChange} type="text" name="author" id="authorField" placeholder="Некојси" />
//   </FormGroup>
//   <FormGroup>
//     <Label className="label-text" for="exampleEmail">Лепенки</Label>
//     <Input onChange={this.handleInputChange} type="text" name="tags" id="tagsField" placeholder="electronics soldering" disabled={!isDisabled} />
//   </FormGroup>
//   <FormGroup>
//     <Label className="label-text" for="exampleEmail" >Категорија</Label>
//     <Input onChange={this.handleInputChange} type="text" name="category" id="categoryField" placeholder="electronics" disabled={!isDisabled} />
//   </FormGroup>

//   <div className="row">
//     <div className="col-6">
//       <FormGroup>
//         <Label className="label-text">Почеток на настанот: </Label>
//         <DatePicker
//           selected={this.startDate}
//           onChange={this.handleStartDateChange}
//           showTimeSelect
//           timeFormat="HH:mm"
//           timeIntervals={15}
//           dateFormat="MMMM d, yyyy h:mm aa"
//           timeCaption="time"
//           disabled={isDisabled}
//         />
//       </FormGroup>
//     </div>
//     <div className="col-6">
//       <FormGroup>
//         <Label className="label-text">Крај на настанот:</Label>
//         <DatePicker
//           selected={this.endDate}
//           onChange={this.handleEndDateChange}
//           showTimeSelect
//           timeFormat="HH:mm"
//           timeIntervals={15}
//           dateFormat="MMMM d, yyyy h:mm aa"
//           timeCaption="time"
//           disabled={isDisabled}
//         />

//       </FormGroup>
//     </div>
//   </div>
// </Form> */}
