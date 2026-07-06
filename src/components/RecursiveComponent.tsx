import React, { useState } from "react";
import type { IFile } from "../interface";
import BottomArrow from "./SVG/BottomArrow";
import RightArrowIcon from "./SVG/RightArrowIcon";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
  setClickedFiles,
  setOpenedFiles,
} from "../app/features/fileTreeSlice";
import { doseFilesObjectExits } from "../utils/functions";

interface Props {
  fileTree: IFile;
}

function RecursiveComponent({ fileTree }: Props) {
  const dispatch = useDispatch();
  const { isFolder, name, children, id, content } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { openFiles } = useSelector((state: RootState) => state.tree);
  
  // Handlers
  const toggle = () => setIsOpen((prev) => !prev);

  const onFileClicked = () => {
    const exists = doseFilesObjectExits(openFiles, fileTree.id)

    dispatch(
      setClickedFiles({
        content: content,
        fileName: name,
        activeTabId: id,
      }),
    );
    if (exists) {
      return;
    }
    dispatch(setOpenedFiles([...openFiles, fileTree]));
  };

  return (
    <nav className="bg-[#24272E] min-h-full py-2  pl-2">
      <div className="flex flex-col gap-2 items-start justify-start ">
      
      <div
        className="flex items-center justify-start mb-1 gap-2 cursor-pointer"
        onClick={toggle}
      >
        {isFolder ? (
          <div className="flex gap-2  py-1 px-3 rounded hover:bg-gray-600 transition-colors duration-200">
            {isOpen ? <BottomArrow /> : <RightArrowIcon />}
            <RenderFileIcon
              fileName={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="text-white">{name}</span>
          </div>
        ) : (
          <div
            className="mr-2 flex gap-2  py-1 px-3 rounded hover:bg-gray-600 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onFileClicked();
            }}
          >
            <span>
              <RenderFileIcon
                fileName={name}
                isFolder={isFolder}
                isOpen={isOpen}
              />
            </span>

            <span className="text-white">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
    </nav>
    
  );
}

export default RecursiveComponent;
