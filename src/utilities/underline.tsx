export const underlineParse = (line: string) => {
    const underlineRegex = /__(.*?)__/g
    return line.replace(underlineRegex, "<u>$1</u>")
}