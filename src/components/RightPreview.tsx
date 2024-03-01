import { useSelector } from "react-redux";
import FilesHilighters from "./FilesHilighters";
import Openfilebar from "./Openfilebar";
import { RootState } from "../app/store";
import WelcomeTap from "./WelcomeTap";
const RightPreview = () => {
  const { clickedFile, openedfile } = useSelector(
    ({ treeFile }: RootState) => treeFile
  );
  return (
    <div>
      {openedfile.length > 0 ? (
        <div>
          {<Openfilebar />}
          <FilesHilighters content={String(clickedFile.contentFile)} />
        </div>
      ) : (
        <WelcomeTap />
      )}
    </div>
  );
};
export default RightPreview;
