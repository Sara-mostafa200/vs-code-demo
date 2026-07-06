import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import type { IProjectContent } from '../interface';
interface IProps {
    content : string | IProjectContent |undefined
}

export default function FileSyntaxHighlighter({content} : IProps) {
  return (
     <SyntaxHighlighter language="javascript" style={anOldHope}
     customStyle={{
        backgroundColor:'transparent',
        width:'100%',
        maxHeight:'100vh',
        overflowX:'auto',
        fontSize:'1rem',
     }}

     showLineNumbers
     >
      {String(content)}
    </SyntaxHighlighter>
  )
}


