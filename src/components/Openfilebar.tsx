import { useSelector } from "react-redux";
import OpenedFileTap from "./OpenedFileTap";
import { RootState } from "../app/store";
import { useState } from "react";
import Menu from "../Ui/Menu";
const Openfilebar = () => {
  const { openedfile  } = useSelector(({ treeFile }: RootState) => treeFile);
  const [menuContext , setmenuContext] = useState<{x:number , y:number}>({x: 0, y: 0});
  const [showMenue , setshowMenue ] = useState(false)
  return (
    <div>
      <div className="flex" 
        onContextMenu={(e)=>{
          e.preventDefault()
          setmenuContext({x:e.clientX , y:e.clientY})
          setshowMenue(true)
        }}
      >
        {openedfile.map((file) => (
          <OpenedFileTap file={file} />
        ))}
      </div>
      {showMenue && <Menu positons={menuContext} setshowMenue={setshowMenue}/>}
    </div>
  );
};
export default Openfilebar;
