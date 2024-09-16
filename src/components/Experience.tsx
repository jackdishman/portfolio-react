import React from "react";

type ExperienceProps = {
  title: string;
  company: string;
  link: string;
  dateRange: string;
  description: string[];
  employmentType: "Full-Time" | "Part-Time" | "Side Project";
  technologies?: React.ReactNode;
  images?: string[];
  videoSrc?: string; // Optional video source
};

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  link,
  dateRange,
  description,
  employmentType,
  technologies,
  images,
  videoSrc, // Optional video source
}) => {
  const chipColor =
    employmentType === "Full-Time"
      ? "bg-green-100 text-green-800"
      : employmentType === "Part-Time"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-blue-100 text-blue-800";

  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 mt-12 border-t border-b border-gray-900 py-10">
      <h2 className="text-3xl text-center">{title}</h2>
      <div className="flex justify-between mt-5 items-center">
        <a href={link} target="_blank" className="underline">
          {company}
        </a>
        <span className="italic">{dateRange}</span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${chipColor}`}
        >
          {employmentType}
        </span>
      </div>
      {images && (
        <div className="flex justify-center w-full mt-5">
          <img
            src={images[0]}
            alt={`${company} image`}
            className="rounded-lg"
          />
        </div>
      )}
      {videoSrc && (
        <div className="py-5">
          <video
            className="rounded-lg shadow-lg"
            autoPlay
            loop
            controls={false}
            playsInline
            muted
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
      )}
      <ul className="list-disc list-inside">
        {description.map((desc, idx) => (
          <li key={idx} className="mt-3 text-gray-900 text-sm">
            {desc}
          </li>
        ))}
      </ul>
      {technologies && (
        <div className="flex justify-center h-6 mt-3">{technologies}</div>
      )}
    </div>
  );
};

export default Experience;
