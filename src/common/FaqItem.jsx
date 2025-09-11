import { FaAngleDown, FaChevronUp } from "react-icons/fa";

const FaqItem = ({ course, handelOpen, index, length }) => {
  return (
    <div className="flex">
      <div className="flex-2 hidden md:block">
        <p className="font-bold text-lg">{course.title}</p>
      </div>
      <div className="flex-1 hidden md:flex flex-col mt-2 relative">
        <div
          className={`z-1 w-6 h-6 rounded-full border-[3px] border-[#553982] shrink-0 ${
            course.active ? "bg-[#553982]" : "bg-white"
          }`}
        ></div>
        {index < length - 1 && (
          <div className="z-0 w-[3px] bg-[#553982] flex-1 absolute left-[11px] h-full top-2"></div>
        )}
      </div>
      <div className="flex-5 bg-[#f6f6f6] mb-3 px-4 py-3 rounded-2xl space-y-2 containBox relative ">
        <h1 className="font-bold text-lg">{course.heading}</h1>
        <p
          className={`${
            course.active ? "max-h-[500px]" : "max-h-0 overflow-hidden "
          } text-[16px] transition-all duration-300 ease-in-out `}
        >
          {course.description}
        </p>

        <button
          className="flex items-center gap-2 font-bold text-[16px]"
          onClick={() => handelOpen(course.id)}
        >
          Discover More {course.active ? <FaChevronUp /> : <FaAngleDown />}
        </button>
      </div>
    </div>
  );
};

export default FaqItem;
