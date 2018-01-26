import React, {Component} from 'react';
import { FormGroup, ControlLabel, HelpBlock, Checkbox, FormControl, Button, Radio } from 'react-bootstrap'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

import logo from './logo.svg';
import './App.css';

const FieldGroup = ({id, label, help, ...props}) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
)

class App extends Component {
  constructor() {
    super()
    this.state = { tags: [] }
  }

  handleChange = (tags) => {
    this.setState({ tags })
  }

  selectChange = (event, selectname) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  
  submit = (event) => {
    console.log(this.state)
    event.preventDefault()
  }

  render = () => (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h2>Hi Jenna!</h2>
        <p>What recipe are we making?</p>
        <form>
          {/* <FieldGroup
            id="formControlsText"
            type="text"
            label="Ingredients"
            placeholder="Apples, pears, grapes..."
          /> */}

          <label className="control-label">Ingredients</label>
          <TagsInput
            value={this.state.tags}
            onChange={this.handleChange}
            // inputValue={this.state.tag}
            onlyUnique
            addOnBlur
          />

          <FormGroup controlId="formControlsSelectMultiple1">
            <ControlLabel>Appliance</ControlLabel>
            <FormControl componentClass="select" onChange={this.selectChange} name="appliance" multiple>
              <option value="select">Select (multiple)</option>
              <option value="microwave">Microwave</option>
              <option value="oven">Oven</option>
              <option value="toaster">Toaster</option>
              <option value="toaster-oven">Toaster Oven</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="formControlsSelectMultiple2">
            <ControlLabel>Meal Type</ControlLabel>
            <FormControl componentClass="select" onChange={this.selectChange} name="mealtype" multiple>
              <option value="select">Select (multiple)</option>
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

          {/* <p>When are you making this?</p>        

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
    </div>
  )
}

export default App
