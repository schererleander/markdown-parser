export const imageParse = (line: string) => {
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/
    const matches = line.match(imageRegex)
    console.debug(matches)
    if(matches) {
        const altText = matches[1]
        const imagePath = matches[2]
        return <img src={imagePath} width="300px" alt={altText} />
    }
    return null
}