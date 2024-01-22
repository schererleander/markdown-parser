import React, { useState } from 'react';
import { headingParse } from './utilities/heading';
import { blockquoteParse } from './utilities/blockquote';
import { horizontalLineParse } from './utilities/horizonLine';
import { boldParse } from './utilities/bold';
import { underlineParse } from './utilities/underline';
import { italicParse } from './utilities/italics';
import { imageParse } from './utilities/image';
import { highlightParse } from './utilities/highlight';
import { codeParse } from './utilities/code';

function App() {
  const [markdownInput, setMarkdownInput] = useState("")
  const parseMarkdown = (markdownText: string) => {
    const lines = markdownText.split("\n")
    const renderLines = lines.map((line, index) => {
      
      const heading = headingParse(line)
      if(heading) {
        return heading
      }

      const blockquote = blockquoteParse(line)
      if(blockquote) {
        return blockquote
      }

      const horizontalLine = horizontalLineParse(line)
      if(horizontalLine) {
        return horizontalLine
      }

      const image = imageParse(line)
      if(image) {
        return image
      }
      
      let text = line
      text = boldParse(text)
      text = underlineParse(text)
      text = italicParse(text)
      text = highlightParse(text)
      text = codeParse(text)

      return <p key={index} dangerouslySetInnerHTML={{__html: text}} />
    })
    return renderLines
  }

  return (
    <>
      <header>
        <h1>markdown-parser</h1>
        <h2>Markdown Editor with realtime Preview</h2>
      </header>
      <main>
        <div className='editor'>
          <textarea
          onChange={(e) => setMarkdownInput(e.target.value)}
          placeholder='Insert your markdown...'>
          </textarea>
        </div>
        <div className='preview'>
          {parseMarkdown(markdownInput)}
        </div>
      </main>
    </>
  )
}

export default App;
