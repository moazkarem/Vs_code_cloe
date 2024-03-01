import { useState } from "react";
import { Ifile } from "../interfaces/Interfaces";
import Right from "../SVG/Right";
import CloseIcon from "../SVG/Bottom";
import Renderfileicon from "./Renderfileicon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  clickedFileAction,
  openedFileAction,
} from "../app/features/FiletreeSlice";
import { doesFileFounded } from "../validation/validatons";
interface Iprops {
  filetree: Ifile;
}
const RecursiveFilecomponents = ({ filetree }: Iprops) => {
  const { name, isFolder, children, id, content } = filetree;
  const [isopen, setisopen] = useState(false);
  const { openedfile } = useSelector(({ treeFile }: RootState) => treeFile);
  const dispatch = useDispatch();
  const onfileclicked = () => {
    if (doesFileFounded(openedfile, id)) return;
    dispatch(openedFileAction([...openedfile, filetree]));
    dispatch(
      clickedFileAction({ filename: name, contentFile: content, activeTap: id })
    );
  };
  return (
    <div className=" mb-2 ml-2">
      <div
        className="flex items-center mb-1 cursor-pointer"
        onClick={() => setisopen((prev) => !prev)}
      >
        {isFolder && (
          <span className="">{!isopen ? <Right /> : <CloseIcon />}</span>
        )}
        <span className="mr-2">
          {isFolder ? (
            <div className="flex items-center">
              <Renderfileicon
                filename={name}
                isfolder={isFolder}
                isopen={isopen}
              />
              <span>{name}</span>
            </div>
          ) : (
            <div className="flex items-center" onClick={onfileclicked}>
              <Renderfileicon filename={name} />
              <span>{name}</span>
            </div>
          )}
        </span>
      </div>

      {isopen &&
        children &&
        children.map((file, idx) => (
          <RecursiveFilecomponents filetree={file} key={idx} />
        ))}
    </div>
  );
};
export default RecursiveFilecomponents;
