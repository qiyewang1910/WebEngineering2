import { countLines } from "../src/LineCounter";

test("Simple Count", () => {
    expect(countLines("Hallo\nWorld")).toBe(2);
});
