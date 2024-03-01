import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openedFileAction } from "../app/features/FiletreeSlice";
import { RootState } from "../app/store";
interface Iprops {
  positons: {
    x: number;
    y: number;
  };
  setshowMenue: (val: boolean) => void;
}
const Menu = ({ positons: { x, y }, setshowMenue }: Iprops) => {
  const { openedfile, tapRemove } = useSelector(
    ({ treeFile }: RootState) => treeFile
  );
  const dispatch = useDispatch();
  //HANDELER
  const removeAll = () => {
    dispatch(openedFileAction([]));
  };
  const removeOneTap = () => {
    const filtered = openedfile.filter((file) => file.id !== tapRemove);
    dispatch(openedFileAction(filtered));
    setshowMenue(false);
  };
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const clickHandeler = () => {
      console.log("out");
      setshowMenue(false);
    };
    window.addEventListener("click", clickHandeler);

    return () => {
      window.removeEventListener("click", clickHandeler);
    };
  }, [setshowMenue]);
  return (
    <div ref={menuRef}>
      <ul
        className="bg-slate-50 cursor-pointer text-black px-7 w-fit py-1 rounded-sm"
        style={{ position: "absolute", left: x, right: y }}
      >
        <li onClick={removeOneTap}>Close</li>
        <li onClick={removeAll}>Close all</li>
      </ul>
    </div>
  );
};
export default Menu;
