import TabsConetnt from "./TabsConetnt";

const Tabs = ({ tabs, setActiveTabs, activeTab }) => {
  const activedata = tabs.find((tab) => tab.id === activeTab);
  return (
    <div className="space-y-4">
      <div className="flex gap-7 border-b-2  border-purple-200 flex-wrap">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTabs(tab.id)}
            className={`relative py-2 px-4 font-medium text-sm transition-all
              ${
                activeTab === tab.id
                  ? "text-black font-bold bg-pink-200"
                  : "text-gray-600 hover:text-black"
              }`}
            key={tab.id}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute left-0 right-0 -bottom-[1px] mx-auto h-[3px] w-full bg-pink-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
      <div>{<TabsConetnt activedata={activedata} />}</div>
    </div>
  );
};

export default Tabs;
