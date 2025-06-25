import { describe, it, expect } from "vitest";
import { generateID, createBoard, getRandomColor } from "../src/utils.js";

describe("generateID", () => {
  it("should return a string", () => {
    const id = generateID();
    expect(typeof id).toBe("string");
  });

  it("should include the prefix if provided", () => {
    const id = generateID("task");
    expect(id.startsWith("task-")).toBe(true);
    expect(id.length).toBeGreaterThan(5);
  });

  it("should return a string of length ~13 (8 char uuid)", () => {
    const id = generateID("x");
    expect(id.length).toBe(10); // 'x-' + 8 chars
  });
});

describe("createBoard", () => {
  it("should create a board with correct dimensions", () => {
    const board = createBoard(3, 2, (row) => row.push(0));
    expect(board.length).toBe(3);
    board.forEach((row) => expect(row.length).toBe(2));
  });

  it("should apply pushFunc to each cell", () => {
    const board = createBoard(2, 2, (row, i, j) => row.push(`${i},${j}`));
    expect(board[0][0]).toBe("0,0");
    expect(board[1][1]).toBe("1,1");
  });
});

describe("getRandomColor", () => {
  it("should return a hex string starting with #", () => {
    const color = getRandomColor();
    expect(color.startsWith("#")).toBe(true);
    expect(color.length).toBe(7);
  });

  it("should pick from the palette if provided", () => {
    const palette = ["#111111", "#222222"];
    const color = getRandomColor(palette);
    expect(palette).toContain(color);
  });
});
