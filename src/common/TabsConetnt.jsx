import { useState } from "react";
import Modal from "./Modal";

const TabsConetnt = ({ activedata }) => {
  const textConents = activedata.content.text?.description.split("\n");
  const [isopen, setIsopen] = useState(false);

  return (
    <div className="flex gap-10 justify-center items-center flex-col sm:flex-row">
      <div className="flex-1 rounded-2xl overflow-hidden relative">
        <img className="w-full" src={activedata.content.image.url} />
        {activedata.content.image.type === "video" && (
          <button
            onClick={() => setIsopen(true)}
            className="video-btn absolute top-1/2 left-1/2 w-[100px] h-[100px] rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 hover:bg-[#040033] "
          ></button>
        )}
      </div>
      <div className="flex-1 space-y-5">
        <h1 className="text-4xl font-bold text-[#040033]">
          {activedata.content.text?.heading}
        </h1>
        <h2 className="font-bold text-xl text-[#040033]">
          {activedata.content.text?.duration}
        </h2>
        {textConents.map((content) => (
          <p>{content}</p>
        ))}

        <button className="bg-[#040033] px-6 py-4 rounded-xl text-white cursor-pointer">
          {activedata.content?.button.text}
        </button>
      </div>
      <Modal isOpen={isopen} onClose={() => setIsopen(false)}>
        <div className="w-full md:w-1/2 aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`${activedata.content.image.videoUrl}?autoplay=1&mute=1`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default TabsConetnt;
