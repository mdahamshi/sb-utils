const INFO = {
  site: "https://sarawebs.com",
  company: "SaraWebs",
  year: new Date().getFullYear(),
};

/**
 * Generates a random ID with optional prefix.
 * @param {string} [prefix=''] - Prefix to prepend to the ID.
 * @returns {string} - A unique ID like 'myapp-XXXXXXX'.
 */
function generateID(prefix = "") {
  return `${prefix ? prefix + "-" : ""}${crypto.randomUUID().slice(0, 8)}`;
}

/**
 * Appends a copyright notice.
 * @param {string} [title='This Website'] - Title to display before ©.
 */
function addCopyRight(title = "This Website") {
  const footer = document.querySelector("footer");
  if (!footer) return;

  const div = document.createElement("div");
  const p = document.createElement("p");
  p.style.textAlign = "center";
  p.innerHTML = `
    ${title} © ${INFO.year}<br>
    Built with love by 
    <a href="${INFO.site}" style="color: #207de9;text-decoration: none;">${INFO.company}</a>
  `;

  div.appendChild(p);
  footer.appendChild(div);
}

/**
 * Generates a 2D board array and applies a push function.
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @param {Function} pushFunc - Callback to push into each cell.
 * @returns {Array<Array>} - Generated 2D board.
 */
function createBoard(rows, cols, pushFunc) {
  const board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      pushFunc(board[i], i, j);
    }
  }
  return board;
}
/**
 * Returns a random color, either from a provided palette or by generating a random hex color.
 * @param {string[]} [palette] - Optional array of hex color strings.
 * @returns {string} - A random color in hex format.
 */
function getRandomColor(palette) {
  const defaultPalette = [
    "#8e1330",
    "#8a6c1d",
    "#406555",
    "#7c0e45",
    "#8d1978",
    "#181770",
    "#cc38d7",
    "#47504e",
    "#0fa080",
    "#0f64a0",
    "#460fa0",
    "#a00f65",
    "#a00f24",
    "#0f94a0",
    "#0fa067",
    "#0fa03c",
    "#38a00f",
    "#a09d0f",
    "#a0670f",
    "#a0370f",
    "#a00f0f",
    "#2b634d",
    "#2b4c63",
    "#2e6bc6",
    "#1992d4",
  ];

  const activePalette =
    Array.isArray(palette) && palette.length > 0 ? palette : defaultPalette;

  return activePalette[Math.floor(Math.random() * activePalette.length)];
}

// Exported object
const sb_utils = { generateID, addCopyRight, createBoard, getRandomColor };

// For global use if needed
if (typeof window !== "undefined") {
  window.sb = sb_utils;
}

export { sb_utils };
export default sb_utils;
