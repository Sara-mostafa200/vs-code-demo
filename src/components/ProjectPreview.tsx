import type { IClickedFile } from "../app/features/fileTreeSlice";
import Tabs from "./ProjectsTabs";

interface IProps {
 clickedFile:IClickedFile
}

export default function ProjectPreview({ clickedFile }: IProps) {
    const {content} = clickedFile
 console.log({clickedFile})
 const isValid =
    typeof content === "object" &&
    content !== null &&
    "img" in content &&
    "sDescription" in content &&
    "description" in content &&
    "tech" in content;

  if (!isValid) {
    return <span>null</span>;
  }
  return (
    <div className="w-[400px] bg-[#1e1e1e] p-4 rounded-lg text-white font-sans">
      <div className="flex gap-3">
        <img
          src={content.img}
          alt="project"
          className="w-[50px] h-[50px] rounded-md"
        />

        <div>
          <h3 className="m-0 text-lg">{clickedFile?.fileName}</h3>
          <p className="mt-1 text-sm text-gray-400 line-clamp-1">
            {content.sDescription}
          </p>
        </div>
      </div>

      <Tabs />
    </div>
  );
}
