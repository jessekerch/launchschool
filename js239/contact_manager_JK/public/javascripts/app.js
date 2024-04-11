// Controller controls logic: receives updates from View and notifies Model or updates View directly
// Model defines data structure and handles data validation
// View defines display and sends input from user to Controller

import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';

document.addEventListener('DOMContentLoaded', (event) => {
  const view = new View;
  const model = new Model(view);
  const app = new Controller(model, view);
});