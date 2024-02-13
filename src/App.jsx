import {  useState } from 'react';
import './App.css'
import ReactMarkdown from "react-markdown";

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

Previewer
Welcome to my React Markdown Previewer!
This is a sub-heading...
And here's some other cool stuff:
Heres some code, <div></div>, between 2 backticks.

// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
You can also make text bold... whoa!
Or italic.
Or... wait for it... both!
And feel free to go crazy crossing stuff out.

There's also links, and

Block Quotes!

And if you want to get really crazy, even tables:

Wild Header	Crazy Header	Another Header?
Your content can	be here, and it	can be here....
And here.	Okay.	I think we get it.
And of course there are lists.
Some are bulleted.
With different indentation levels.
That look like this.
And there are numbered lists too.
Use just 1s if you want!
And last but not least, let's not forget embedded images:
freeCodeCamp Logo`

function App() {
  const [markdown,setMarkDown] = useState(defaultMarkdown)

  return (
    <div className='container'>
      <div className='editor'>
        <div className='topbar'>Editor</div>
        <textarea id='editor'
          value={markdown} 
          onChange={(e)=>setMarkDown(e.target.value)}/>
      </div>
      <div className='wrap-preview'>
        <div className='topbar'>Preview</div>
        <div className='preview' id='preview'>
          <ReactMarkdown >{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default App
