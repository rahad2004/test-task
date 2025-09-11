import { useState } from "react";
import FaqItem from "../common/FaqItem";
import coursesData from "../data/coursedata.json";
const Faq = () => {
  const [courses, setCourses] = useState(coursesData.courses);

  const handelOpen = (id) => {
    const updateCourses = courses.map((course) => ({
      ...course,
      active: course.id === id ? !course.active : false,
    }));
    setCourses(updateCourses);
  };
  return (
    <div className="container mx-auto">
      <div className="w-1/2 mb-8 space-y-2">
        <h1 className="font-bold text-3xl ">TECHNICAL TRAINING</h1>
        <p className="text-[16px] text-justify w-3/4">
          The technical training component of our Level 3 IT Support
          apprenticeship is split into six practice-led courses. Each
          practice-led course is then split into two parts.
        </p>
      </div>
      <div className="my-3">
        {courses.map((course, index) => (
          <FaqItem
            key={course.id}
            course={course}
            handelOpen={handelOpen}
            index={index}
            length={courses.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
