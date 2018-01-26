export default {
  ingredientInput: [{
      ingredients: ['chicken', 'peppers', 'onions', 'tortillas'],
      recipes: ['chickenFajitas', 'tacos', 'quesadillas'],
    },
    {
      ingredients: ['chicken', 'peppers', 'onions', 'tortillas', 'cheese'],
      recipes: ['chickenFajitas', 'loadedChickenBurritos'],
    },
    {
      ingredients: ['egg', 'tuna', 'milk', 'green peas'],
      recipes: ['tunaCasserole'],
  }],

  chickenFajitas: {
    name: 'Chicken Fajita',
    image: 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/Flavorful-Chicken-Fajitas_exps12540_BOS3149327B02_08_5bC_RMS.jpg',
    prep: 50,
    cook: 4,
  },
  tacos: {
    name: 'Tacos',
    image: 'https://www.mylatinatable.com/wp-content/uploads/2014/02/fh-tacos.jpg',
    prep: 30,
    cook: 10,
  },
  quesadillas: {
    name: 'Quesadillas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Quesadilla_2.jpg/1200px-Quesadilla_2.jpg',
    prep: 8,
    cook: 9,
  },
  loadedChickenBurritos: {
    name: 'Loaded Chicken Burritos',
    image: 'https://images-gmi-pmc.edge-generalmills.com/fe7f2591-dc1e-46a4-8f10-a738973d7d92.jpg',
    prep: 30,
    cook: 15,
  },
  tunaCasserole: {
    name: 'Tuna Casserole',
    image: 'https://fthmb.tqn.com/aPAwH4oFxcqfHZDOVRYGJ-ZZ4fw=/960x0/filters:no_upscale()/tuna-casserole-08-18-56b71e013df78c0b135dd879.jpg',
    prep: 'hey',
    cook: 'there',
  },
}