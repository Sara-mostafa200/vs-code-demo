import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState("skills");

  const tabs = [
    { id: "tech", label: "Tech" },
    { id: "description", label: "Description" },
  ];

 return (
    <div className="flex gap-5 mt-3">
      {tabs.map((tab) => (
        <span
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className={`cursor-pointer pb-1 transition ${
            active === tab.id
              ? "border-b-2 border-blue-500 text-white"
              : "text-gray-400"
          }`}
        >
          {tab.label}
        </span>
      ))}
    </div>
  );
}