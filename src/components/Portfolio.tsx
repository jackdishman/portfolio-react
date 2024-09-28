import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import TypescriptIcon from "./icons/TypescriptIcon";

const Portfolio = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 border-gray-900 mt-24 pb-10">
      <p className="text-gray-900 text-xl mb-10 italic text-center">
        Jack Dishman has 5+ years of professional experience developing sleek,
        scalable, and secure web applications for both startups and Fortune-500
        companies. With a product-focused mentality and an eye for perfection,
        Jack drives business innovation with robust engineering skills and
        product ideation.
      </p>
      <p className="text-gray-900 text-sm text-center">
        This website is made with React.js and deployed using GitHub Pages.
        Source code can be viewed{" "}
        <a
          href="https://github.com/jackdishman/portfolio-react"
          target="_blank"
          className="underline text-gray-500"
        >
          here
        </a>
        .
      </p>
      <div className="flex justify-center h-6 mt-3">
        <ReactIcon />
        <span className="px-2 text-gray-500">x</span>
        <TypescriptIcon />
        <span className="px-2 text-gray-500">x</span>
        <TailwindIcon />
      </div>
    </div>
  );
};

export default Portfolio;
