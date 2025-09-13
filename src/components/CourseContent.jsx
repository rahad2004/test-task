import { useState } from "react";
import counresContent from "../data/contentdata.json";
import Tabs from "../common/Tabs";

const CourseContent = () => {
  const [activeTab, setActiveTabs] = useState(counresContent.tabs[0].id);
  return (
    <div className="container mx-auto space-y-4 mb-14">
      <h1 className="font-bold text-3xl">{counresContent.title}</h1>
      <div className="space-y-4">
        <Tabs
          activeTab={activeTab}
          setActiveTabs={setActiveTabs}
          tabs={counresContent.tabs}
        />
      </div>
    </div>
  );
};

export default CourseContent;
