import { Ifile } from "../interfaces/Interfaces";
export const fileTree: Ifile = {
  id:  1,
  name: "VS CODE",
  isFolder: true,
  children: [
    {
      id:2  ,
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: 3 ,
          name: ".vite",
          isFolder: true,
          children: [{id:4  , name: "react.jsx", isFolder: false , content:`
import Foldericon from "../SVG/Foldericon";
interface Iprops {
  foldername: string;
}
const Foldercomponents = ({ foldername }: Iprops) => {
  return (
    <div className="flex items-center mb-2">
      <span className="mr-2">
        <Foldericon />
      </span>
      <span>{foldername}</span>
    </div>
  );
};
export default Foldercomponents;

          `
          }],
        },
      ],
    },
    {
      id:  5,
      name:"public" , 
      isFolder :true ,
      children:[
        {
          id: 6 ,
          name: "index.html",
          isFolder: false,
          content:`
          <!doctype html>
           <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <link rel="icon" type="image/svg+xml" href="/vite.svg" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Vite + React + TS</title>
            </head>
            <body>
              <div id="root"></div>
              <script type="module" src="/src/main.tsx"></script>
            </body>
          </html>
          `
        }
      ]
    },

    {
      id:  7,
      name:"src" , 
      isFolder :true ,
      children:[
        {
          id: 8 ,
          name:'components' , 
          isFolder:true ,
          children:[
            {
              id: 11 ,
              name:'Slice.ts' , 
              isFolder:false ,
              content:`
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

              `
            },
          ]
        },
       
        {
          id:9  ,
          name: "main.tsx",
          isFolder: false,
          content:`
import RecursiveFilecomponents from "./components/RecursiveFilecomponents";
import { fileTree } from "./data/FileListtree";
import ResizablePanel from "./components/ResizablePanel";
import RightPreview from "./components/RightPreview";
const App = () => {
  return (
    <div className="flex ">
      <ResizablePanel
        leftContent={
          <div className="w-64  ">
            <RecursiveFilecomponents filetree={fileTree} />
          </div>
        }
        rightContent={<RightPreview />}
      />
    </div>
  );
};
export default App;

          `
        },
        {
          id:10  ,
            name: "style.css",
            isFolder: false,
           content:`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #000;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
           `
          },
      ]
    }
    
  ],
};

