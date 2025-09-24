import { countLines, countLinesInFileAsync, countLinesInFileCallback, countLinesInFilePromise, countLinesInFileSync } from "../src/LineCounter";

test("Implementation file and declarations found", async () => {
    expect(countLines).toBeInstanceOf(Function);
    expect(countLinesInFileSync).toBeInstanceOf(Function);
    expect(countLinesInFileCallback).toBeInstanceOf(Function);
    expect(countLinesInFilePromise).toBeInstanceOf(Function);
    expect(countLinesInFileAsync).toBeInstanceOf(Function);
})