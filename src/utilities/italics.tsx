export const italicParse = (line: string) => {
    const italicRegex = /\*(.*?)\*/g
    return line.replace(italicRegex, "<i>$1</i>")
}