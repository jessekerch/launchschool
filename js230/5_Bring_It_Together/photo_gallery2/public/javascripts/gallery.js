// controller handles request flow
// model handles interaction with database and data validation
// --------------------------

import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';

document.addEventListener('DOMContentLoaded', (event) => {
  const app = new Controller(new Model, new View);

});