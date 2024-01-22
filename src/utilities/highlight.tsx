export const highlightParse = (line: string) => {
    const boldRegex = /==(.*?)==/g
    return line.replace(boldRegex, "<mark>$1</mark>")
}