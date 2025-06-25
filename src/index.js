// src/index.js

import { generateID, addCopyRight, createBoard, getRandomColor } from './utils.js';
import { ElementBuilder, labelAndInput } from './dom.js';


const sb_utils = {
  generateID,
  addCopyRight,
  createBoard,
  getRandomColor,
  ElementBuilder,
  labelAndInput,
};

if (typeof window !== 'undefined') {
  window.sb = sb_utils;
}

export {
  generateID,
  addCopyRight,
  createBoard,
  getRandomColor,
  ElementBuilder,
  labelAndInput,
};

export default sb_utils;