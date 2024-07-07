const Sapient = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2">
      <div className="pt-10 mt-12 border-t border-gray-900">
        <h2 className="text-3xl text-center">
          Associate Software Development Engineer
        </h2>
        <div className="flex justify-between mt-5">
          <a href="https://extole.com" target="_blank" className="underline">
            Publicis Sapient
          </a>
          <div className="flex flex-col">
            <span className="italic text-right">Summer 2018,</span>
            <span className="italic text-right">
              {" "}
              July 2019 - September 2020
            </span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-gray-900 text-sm">
        Transformed creative visual designs into front-end web consumable form
        and developed modular components for platform enhancements, bugfixes and
        ADA testing using WCAG design principles.
      </p>
      <p className="mt-3 text-gray-900 text-sm">
        Collaborated with Client and Creatives to finalize project scope and
        feasibility in an Agile Development Workflow using Scrum principles that
        maximized business value by saving time while improving the quality of
        deliverables.
      </p>
      <p className="mt-3 text-gray-900 text-sm">
        Developed a Component Visualization Tool to improve the efficiency of
        pre-production testing for style guide and component updates using
        Vue.js, Vuex state management, Axios, and TailwindCSS
      </p>
      <p className="mt-3 text-gray-900 text-sm">
        Developed an office navigation tool using React, Redux and Contentful to
        improve culture and communication within the NYC office.
      </p>
    </div>
  );
};

export default Sapient;
