import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface Iprops {
  content: string;
}
const FilesHilighters = ({ content }: Iprops) => {
  return (
    <div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          backgroundColor: "transparent",
          width: "100%",

          overflowX: "auto",
          fontSize: "1rem",
        }}
        showLineNumbers
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};
export default FilesHilighters;
