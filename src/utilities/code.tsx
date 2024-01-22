export const codeParse = (line: string) => {
    const boldRegex = /`(.*?)`/g
    return line.replace(boldRegex, "<code>$1</code>")
}