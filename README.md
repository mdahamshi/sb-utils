## 📦 `@sarawebs/sb-utils`

A lightweight and reusable utility library from **SaraWebs**, designed to simplify common frontend tasks like ID generation, dynamic color selection, board creation, and copyright injection.

Useful for internal projects, small web apps, or client dashboards where you want to avoid repetitive code.

---

### ✨ Features

* 🔑 **ID Generation**
  Generate prefixed, short unique IDs using `crypto.randomUUID()`.

* 🖍️ **Random Color Picker**
  Select a color from a custom palette or fallback to random HEX.

* 🎲 **2D Board Generator**
  Quickly generate grid-like structures using a callback on each cell.

* ©️ **Dynamic Footer Injection**
  Append a styled copyright notice with your company name and site.

---

### 📚 API Reference

```js
import { sb_utils } from '@sarawebs/sb-utils';

// or
import { generateID, getRandomColor, createBoard, addCopyRight } from '@sarawebs/sb-utils';
```

#### `generateID(prefix?: string): string`

Generates a short unique ID (8 characters) with optional prefix.
Example:

```js
generateID('todo'); // => 'todo-1a2b3c4d'
```

---

#### `getRandomColor(palette?: string[]): string`

Returns a random HEX color string.

* Provide a custom `palette` array to choose from specific colors.
* If `palette` is empty or missing, generates a random hex color.

Example:

```js
getRandomColor(['#ff0000', '#00ff00']); // => '#00ff00'
getRandomColor(); // => '#a1b2c3'
```

---

#### `createBoard(rows: number, cols: number, pushFunc: (row, i, j) => void): Array<Array<any>>`

Creates a 2D array board with rows and columns, applying `pushFunc` on each cell.

Example:

```js
const board = createBoard(3, 3, (row, i, j) => {
  row.push({ x: i, y: j });
});
```

---

#### `addCopyRight(title?: string)`

Appends a styled footer element to the `<footer>` tag in the DOM.

Example:

```js
addCopyRight('My Dashboard');
```

---

### 🌐 Website

Made with ❤️ by [SaraWebs](https://sarawebs.com)

---

### 🛠️ Use Cases

* Internal admin panels
* Static sites or dashboards
* Quickly prototyping UI logic
