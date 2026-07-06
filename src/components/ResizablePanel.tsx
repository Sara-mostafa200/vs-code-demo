import type { ReactNode } from "react";
import {
  Panel,
  Group,
  Separator,
  useDefaultLayout,
} from "react-resizable-panels";

interface IProps {
  RightPanel: ReactNode;
  LeftPanel: ReactNode;
}

const ResizablePanel = ({ RightPanel, LeftPanel }: IProps) => {
  const { defaultLayout, onLayoutChanged } = useDefaultLayout({
    id: "unique-layout-id",
    storage: localStorage,
  });

  return (
    <Group defaultLayout={defaultLayout} onLayoutChanged={onLayoutChanged} autoSave="">
      {  
        <>
          {" "}
          <Panel collapsible collapsedSize={35} id="Left" minSize={50}>
             {LeftPanel}
          </Panel>
          <Separator
            style={{ width: "2px", background: "#ccc", cursor: "col-resize" }}
          />
         
        </>
      }
       <Panel id="Right"> {RightPanel} </Panel>
    </Group>
  );
};

export default ResizablePanel;
