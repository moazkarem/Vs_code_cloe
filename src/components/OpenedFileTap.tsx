import { Ifile } from "../interfaces/Interfaces";
import { useDispatch, useSelector } from "react-redux";
import Renderfileicon from "./Renderfileicon";
import Closeicon from "../SVG/Closeicon";
import {
  clickedFileAction,
  openedFileAction,
  removeTapAction,
} from "../app/features/FiletreeSlice";
import { RootState } from "../app/store";

interface Iprops {
  file: Ifile;
}
const OpenedFileTap = ({ file }: Iprops) => {
  const { clickedFile, openedfile } = useSelector(
    ({ treeFile }: RootState) => treeFile
  );
  const { activeTap } = clickedFile;
  const dispatch = useDispatch();
  const { name, content, id } = file;
  const contentHandeler = () => {
    dispatch(
      clickedFileAction({ filename: name, contentFile: content, activeTap: id })
    );
  };
  //  HANDELERS ======
  const onRemove = (id: number) => {
    const filtered = openedfile.filter((file) => file.id !== id);
    dispatch(openedFileAction(filtered));
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(openedFileAction([]));
      dispatch(
        clickedFileAction({ activeTap: null, contentFile: "", filename: "" })
      );
      return;
    }
    const { name, id: Theid, content } = filtered[filtered.length - 1];
    dispatch(
      clickedFileAction({
        activeTap: Theid,
        filename: name,
        contentFile: content,
      })
    );
  };
  return (
    <div>
      <div
        onClick={contentHandeler}
        onContextMenu={(e) => {
          e.preventDefault();
          dispatch(removeTapAction(id));
        }}
        className="flex cursor-pointer  p-2 border-[#ffffff1f] border-2 items-center"
        key={file.id}
        style={{
          borderTop:
            file.id.toString() === activeTap?.toString()
              ? "2px solid #cf6ccf"
              : "2px solid transparent",
        }}
      >
        <span className="mr-2">
          <Renderfileicon filename={file.name} />
        </span>
        <span className="mr-2">{file.name} </span>
        <span
          className="hover:bg-[#edb3b346] rounded-sm p-1"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          <Closeicon />{" "}
        </span>
      </div>
    </div>
  );
};
export default OpenedFileTap;
