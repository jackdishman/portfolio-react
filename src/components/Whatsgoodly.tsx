const Whatsgoodly = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2">
      <div className="pt-10 mt-12 border-t border-gray-900">
        <h2 className="text-3xl text-center">Technical Intern</h2>
        <div className="flex justify-between mt-5">
          <a
            href="https://www.linkedin.com/company/whatsgoodly-inc-/"
            target="_blank"
            className="underline"
          >
            Whatsgoodly, Inc.
          </a>
          <span className="italic">Summer 2017</span>
        </div>
      </div>
      <p className="mt-3 text-gray-900 text-sm">
        Documented engagement analytics and handled bug fixes of an anonymous
        polling application (deprecated)
      </p>
      <p className="mt-3 text-gray-900 text-sm">
        Worked alongside notable entrepreneurs including Thomas Harrison,
        founder of Blockrize (acquired by Gemini) and Alex Atallah, co-founder
        of OpenSea.
      </p>
    </div>
  );
};

export default Whatsgoodly;
