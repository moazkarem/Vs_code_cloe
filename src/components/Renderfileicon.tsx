import Fileicon from "../SVG/Fileicon";
import Fileimg from "../SVG/Fileimg";
interface Iprops {
  filename: string;
  isopen?: boolean;
  isfolder?: boolean;
}
const Renderfileicon = ({ filename, isfolder, isopen }: Iprops) => {
  const extension = filename.split(".").pop();
  if (extension === "html") return <Fileimg src="/icons/html.svg" />;
  if (extension === "jsx") return <Fileimg src="/icons/react.svg" />;
  if (extension === "css") return <Fileimg src="/icons/css.svg" />;
  if (extension === "tsx") return <Fileimg src="/icons/react_ts.svg" />;
  if (extension === "ts") return <Fileimg src="/icons/typescript.svg" />;
  //**  FOLDERS
  if (isfolder) {
    if (extension === "node_modules")
      return isopen ? (
        <Fileimg src="/icons/folder-node-open.svg" />
      ) : (
        <Fileimg src="/icons/folder-node.svg" />
      );
    if (extension === "public")
      return isopen ? (
        <Fileimg src="/icons/folder-public-open.svg" />
      ) : (
        <Fileimg src="/icons/folder-public.svg" />
      );

    if (extension === "src")
      return isopen ? (
        <Fileimg src="/icons/folder-src-open.svg" />
      ) : (
        <Fileimg src="/icons/folder-src.svg" />
      );

      if (extension === "components")
      return isopen ? (
        <Fileimg src="/icons/folder-components-open.svg" />
      ) : (
        <Fileimg src="/icons/folder-components.svg" />
      );

      
     
  }
  if (isfolder && isopen)
    return <Fileimg src="/icons/folder-default-open.svg" />;
  if (isfolder && !isopen) return <Fileimg src="/icons/folder-default.svg" />;

  return <Fileicon />;
};
export default Renderfileicon;
