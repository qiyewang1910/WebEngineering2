export function countLines(input: string): number {
    if(input.length === 0 ){
        return 0;
    }

    const newlineCount = (input.match(/\n/g) || []).length;
    return newlineCount + 1;
}