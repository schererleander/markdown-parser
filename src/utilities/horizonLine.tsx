export const horizontalLineParse = (line: string) => {
    if(line.startsWith("***")) return <hr></hr>
    if(line.startsWith("---")) return <hr></hr>
    return null
}