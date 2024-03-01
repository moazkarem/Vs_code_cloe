import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
interface Iprops {
  defaultLayout?: number[] | undefined;
  leftContent: ReactNode;
  rightContent: ReactNode;
}
const ResizablePanel = ({
  defaultLayout = [15, 85],
  rightContent,
  leftContent,
}: Iprops) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup direction="horizontal" onLayout={onLayout}>
      <Panel defaultSize={defaultLayout[0]}>{leftContent}</Panel>
      <PanelResizeHandle className=" w-2 border-r border-[#ffffff1f] h-screen" />
      <Panel defaultSize={defaultLayout[1]}>{rightContent}</Panel>
    </PanelGroup>
  );
};
export default ResizablePanel;
