import React, {Component} from 'react'
import isEqual from 'lodash/isEqual'
import forEach from 'lodash/forEach'
import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Button,
  Grid,
  Col,
  Row,
  ButtonGroup,
} from 'react-bootstrap'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

import recipes from './recipes'
import logo from './logo.jpg';
import './App.css';

const FieldGroup = ({id, label, help, ...props}) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
)

const Recipes = ({ stuff }) => (
  <div>{stuff}</div>
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
    this.state = {
      tags: ['tortillas', 'chicken', 'peppers', 'onions'],
      recipeList: [],
    }
  }

  handleChange = (tags) => {
    this.setState({tags})
  }

  selectChange = (event, selectname) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  ready = (event) => {
    const ing = this.state.tags.sort()
    let newRecipes = null

    forEach(recipes.ingredientInput, function (value) {
      if (isEqual(ing, value.ingredients.sort())) {
        newRecipes = value.recipes;
      }
    })

    // console.log('newRecipes', newRecipes)
    // console.log('state', this.state)

    this.setState({ recipeList: newRecipes })

    event.preventDefault()
  }

  render = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <h2>Hi Jenna!</h2>
            <form>
              <Row className="show-grid">
              <h3>What recipe are we making?</h3>
              <Col xs={6} md={6}>
                <label className="control-label">Ingredients</label>
                <TagsInput
                  value={this.state.tags}
                  onChange={this.handleChange}
                  // inputValue={this.state.tag}
                  onlyUnique
                  addOnBlur
                />
                
              </Col>
              <Col xs={3} md={3}>
                <FormGroup controlId="formControlsSelectMultiple">
                  <ControlLabel>Appliance (Multiple)</ControlLabel>
                  <FormControl componentClass="select" onChange={this.selectChange} name="appliance" multiple>
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
                  <FormControl componentClass="select" onChange={this.selectChange} name="mealtype" multiple>
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
              </Row>
              <Row className="show-grid">
              <Col xs={12}>
                <h3>When are you making this?</h3>
                <Col xs={4} md={4}>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Date"
                    placeholder="12/12"
                  />
                </Col>
                <Col xs={6} md={8}>
                  <Col xs={4} md={8}>
                    <FieldGroup
                      id="formControlsText"
                      type="text"
                      label="Time"
                      placeholder="6:00"
                    />
                  </Col>
                  <Col xs={8} md={4} >
                    <label className="control-label">&nbsp;</label>
                    <ButtonGroup bsSize="small" style={{verticalAlign: 'baseline'}}>
                      <Button>AM</Button>
                      <Button>PM</Button>
                      <Button>24HR</Button>
                    </ButtonGroup>
                  </Col>
                </Col>
              </Col>

              </Row>
              <Row className="show-grid">
              <Col xs={12}>
                <h3>Any Allergies?</h3>
                <Col xs={4} md={3}>
                  <FormGroup>
                    <ControlLabel>Known Allergies</ControlLabel>
                    <FormControl.Static>Tuna, Beans, Tomato</FormControl.Static>
                  </FormGroup>
                </Col>
                <Col xs={8} md={9}>
                  <label className="control-label">Additional Allergies</label>
                  <TagsInput
                    value={[]}
                    onChange={this.handleChange}
                    onlyUnique
                    addOnBlur
                  />
                </Col>
              </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={10} />
                <Col xs={2}>
                  <Button type="submit" onClick={this.ready}>Ready!</Button>
                </Col>
              </Row>
            </form>
          </Col>

          <Recipes stuff={this.state.recipeList} />
          {/* {(this.state.recipeList)} */}
        </Row>
      </Grid>
    </div>
  )
}

export default App
