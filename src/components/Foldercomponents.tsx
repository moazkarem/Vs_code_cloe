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
