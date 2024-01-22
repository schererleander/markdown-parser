import React, { useState } from 'react';
import { parseHeading } from './heading';

function App() {
  const [markdownInput, setMarkdownInput] = useState("")
  const parseMarkdown = (markdownText: string) => {
    const lines = markdownText.split("\n")
    const renderLines = lines.map((line, index) => {
      const heading = parseHeading(line)
      if(heading) {
        return heading
      }
      return <p key={index}>{line}</p>
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
          <hr></hr>
        </div>
      </main>
    </>
  )
}

export default App;
