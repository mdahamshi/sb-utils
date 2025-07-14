// src/index.js

import {
  generateID,
  addCopyRight,
  createBoard,
  getRandomColor,
} from "./utils.js";
import { ElementBuilder, labelAndInput } from "./dom.js";
import { LinkPreviewFetcher } from "./LinkPreviewFetcher.js";

const sb_utils = {
  generateID,
  addCopyRight,
  createBoard,
  getRandomColor,
  ElementBuilder,
  labelAndInput,
  LinkPreviewFetcher,
};

if (typeof window !== "undefined") {
  window.sb = sb_utils;
}

export {
  generateID,
  addCopyRight,
  createBoard,
  getRandomColor,
  ElementBuilder,
  labelAndInput,
  LinkPreviewFetcher,
};

export default sb_utils;
