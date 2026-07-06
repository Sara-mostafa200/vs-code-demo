import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import WelcomeTab from "./components/Welcome";
import Preview from "./components/Preview";
import FirstSideBar from "./components/FirstSideBar";
import { projectsFiles } from "./data/ProjectTree";
import type { IFile } from "./interface";

function App() {
  const { openFiles } = useSelector((state: RootState) => state.tree);
  const { personalInfo   } = useSelector((state: RootState) => state.previewInfo);
  
  const filesTree:IFile = personalInfo ? fileTree : projectsFiles
  console.log({fileTree , projectsFiles})
  return (
    <div className="flex h-screen w-full">
      <span
      >
      <FirstSideBar/>
      </span>
      <ResizablePanel
        
        LeftPanel={<RecursiveComponent fileTree={filesTree} />}
        RightPanel={ openFiles.length ? <Preview/> : <WelcomeTab/>}
      />
    </div>
  );
}

export default App;
