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
