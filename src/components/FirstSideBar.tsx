import React from "react";
import ProjectIcon from "./SVG/ProjectIcon";
import { useDispatch } from "react-redux";
import {
  toggleInfo,
} from "../app/features/sideBarActiveComponentsSlice";
import FolderIcon from "./SVG/FolderIcon";

export default function FirstSideBar() {
  const dispatch = useDispatch();
  

  // Handlers
  const onInfoClicked = () => {
    dispatch(toggleInfo({personalInfo:true , projectsInfo:false}));
  };

  const onProjectClicked = () => {
       dispatch(toggleInfo({personalInfo:false , projectsInfo:true}));



  };

  return (
    <div className="flex flex-col gap-3 px-3 py-2">
      <span onClick={() => onInfoClicked()}>
        <FolderIcon/>
      </span>

      <span
        onClick={() =>
         onProjectClicked()
        }
      >
        <ProjectIcon/>
      </span>
    </div>
  );
}
