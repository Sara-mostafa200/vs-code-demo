import React from "react";
import type { IFile } from "../interface";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFiles, setOpenedFiles } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";
import CloseIcon from "./SVG/closeIcon";

interface IProps {
  file: IFile;
}

export default function OpenedFilesBarTab({ file }: IProps) {
  const { name: fileName, content, id } = file;
  const {
    clickedFile: { activeTabId },
    openFiles,
  } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();

  //   Handlers
  const onTabClick = () => {
 

    dispatch(setClickedFiles({ content, fileName, activeTabId: id }));
  };

  const onRemoveTab = (selectedId: string) => {
    const filteredTabs = openFiles.filter((file) => file.id != selectedId);
    const lastTab = filteredTabs[filteredTabs.length - 1];
    const removedIndex = openFiles.findIndex((file) => file.id === selectedId);
    if (!lastTab) {
      dispatch(setOpenedFiles([]));
      dispatch(
        setClickedFiles({
          activeTabId: null,
          content: "",
          fileName: "",
        }),
      );
      return;
    }
    const { id, name, content } = filteredTabs[removedIndex] ?? lastTab;

    dispatch(setOpenedFiles(filteredTabs));
    dispatch(
      setClickedFiles({
        activeTabId: id,
        content: content,
        fileName: name,
      }),
    );
  };

  return (
    <div
      className={`flex items-center gap-3 border-t p-2 mx-2 duration-300  hover:bg-[#64646473]  ${id === activeTabId ? "border-gray-400" : "border-transparent"} `}
      onClick={onTabClick}
    >
      <RenderFileIcon fileName={fileName} />

      <li className="flex justify-center items-center text-nowrap w-fit text-white ">
        {fileName}
      </li>

      <span
        onClick={(e) => {
          e.stopPropagation();
          onRemoveTab(id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
}
