import React from "react";
import { svgStyles , FirstSideBarIcons } from "../../styles";

function FolderIcon() {
  return (
 <svg xmlns="http://www.w3.org/2000/svg" width={FirstSideBarIcons.width} height={FirstSideBarIcons.hight} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-folders-icon lucide-folders  ${FirstSideBarIcons.color}`}><path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"/><path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1"/></svg>
  );
}

export default  FolderIcon;
