import React from "react";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBar from "./OpenedFilesBar";
import ProjectPreview from "./ProjectPreview";

export default function Preview() {
  const { clickedFile } = useSelector((state: RootState) => state.tree);


  if (
    typeof clickedFile.content === "object" &&
    "description" in clickedFile.content
  ) {
    return (
      <>
        <OpenedFilesBar />
        <ProjectPreview clickedFile={clickedFile} />;
      </>
    );
  }

  return (
    <>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.content} />;
    </>
  );
}
