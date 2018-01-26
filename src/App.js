import React, {Component} from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import {FormGroup, ControlLabel, HelpBlock, Checkbox, FormControl, Button, Radio, Grid, Col, Row} from 'react-bootstrap'

import logo from './logo.svg';
import './App.css';

const FieldGroup = ({id, label, help, ...props}) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
)

// var App = React.createClass({
//   getInitialState: function () {
//     var value = new Date().toISOString();
//     return {
//       value: value
//     }
//   },
//   handleChange: function (value, formattedValue) {
//     this.setState({
//       value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
//       formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
//     });
//   },
//   componentDidUpdate: function () {
//     // Access ISO String and formatted values from the DOM.
//     const hiddenInputElement = document.getElementById("example-datepicker");
//     console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
//     console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
//   },
//   render: function () {
//     return <FormGroup>
//       <ControlLabel>Label</ControlLabel>
//       <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange}/>
//       <HelpBlock>Help</HelpBlock>
//     </FormGroup>;
//   }
// });


class App extends Component {
  constructor() {
    super()
    this.state = {tags: []}
  }

  handleChange = (tags) => {
    this.setState({tags})
  }

  submit = (event) => {
    console.log(this.state.tags)
    event.preventDefault()
  }

  render = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <h2>Hi Jenna!</h2>
            <h3>What recipe are we making?</h3>
            <form>
              <Col xs={6} md={6}>
                <label className="control-label">Ingredients</label>
                <TagsInput
                  value={this.state.tags}
                  onChange={this.handleChange}
                  // inputValue={this.state.tag}
                  onlyUnique
                  addOnBlur
                />

                {/*<FieldGroup*/}
                {/*id="formControlsText"*/}
                {/*type="text"*/}
                {/*label="Ingredients"*/}
                {/*placeholder="Apples, pears, grapes..."*/}
                {/*/>*/}
              </Col>
              <Col xs={3} md={3}>
                <FormGroup controlId="formControlsSelectMultiple">
                  <ControlLabel>Appliance (Multiple)</ControlLabel>
                  <FormControl componentClass="select" multiple>
                    <option value="microwave">Microwave</option>
                    <option value="oven">Oven</option>
                    <option value="toaster">Toaster</option>
                    <option value="toaster-oven">Toaster Oven</option>
                  </FormControl>
                </FormGroup>
              </Col>
              <Col xs={3} md={3}>
                <FormGroup controlId="formControlsSelectMultiple">
                  <ControlLabel>Meal Type (Multiple)</ControlLabel>
                  <FormControl componentClass="select" multiple>
                    <option value="Appetizer">Appetizer</option>
                    <option value="Beverage">Beverage</option>
                    <option value="Bread">Bread</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Casserole">Casserole</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Entree">Entree</option>
                    <option value="Salad">Salad</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Side-Dish">Side Dish</option>
                    <option value="Soup">Soup</option>
                    <option value="Snack">Snack</option>
                  </FormControl>
                </FormGroup>
              </Col>

              <h3>When are you making this?</h3>
              <Col xs={6} md={6}>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Date"
                  placeholder="12/12"
                />
              </Col>
              <Col xs={6} md={6}>
                <Col xs={4} md={8}>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Time"
                    placeholder="6:00"
                  />
                </Col>
                <Col xs={8} md={4} style={{verticalAlign: 'bottom'}}>
                  <Button>AM</Button>
                  <Button>PM</Button>
                  <Button>24HR</Button>
                </Col>
              </Col>
            </form>
          </Col>
        </Row>
      </Grid>
      <form>

        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />
        <FieldGroup id="formControlsPassword" label="Password" type="password"/>
        <FieldGroup
          id="formControlsFile"
          type="file"
          label="File"
          help="Example block-level help text here."
        />

        <Checkbox checked readOnly>
          Checkbox
        </Checkbox>
        <Radio checked readOnly>
          Radio
        </Radio>


        <FormGroup>
          <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
          <Checkbox inline>3</Checkbox>
        </FormGroup>
        <FormGroup>
          <Radio name="radioGroup" inline>1</Radio>{' '}
          <Radio name="radioGroup" inline>2</Radio>{' '}
          <Radio name="radioGroup" inline>3</Radio>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple3">
          <ControlLabel>Multiple select</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">select (multiple)</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea"/>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Static text</ControlLabel>
          <FormControl.Static>email@example.com</FormControl.Static>
        </FormGroup> */}

        <Button type="submit" onClick={this.submit}>Submit</Button>
      </form>
    </div>
  )
}

export default App
