const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#111827]">
      <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#home">
          <h2 className="text-lg font-medium text-gray-500 lg:mt-0 dark:text-gray-400 dark:text-white">
            aagungwwahyu
          </h2>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <a
            href="#home"
            className="text-sm text-black transition-colors duration-300 dark:text-black hover:text-gray-500 dark:hover:text-gray-400 dark:text-white"
          >
            Home
          </a>

          <a
            href="#education"
            className="text-sm text-black transition-colors duration-300 dark:text-black hover:text-gray-500 dark:hover:text-gray-400 dark:text-white"
          >
            Education
          </a>

          <a
            href="#works"
            className="text-sm text-black transition-colors duration-300 dark:text-black hover:text-gray-500 dark:hover:text-gray-400 dark:text-white"
          >
            Works
          </a>

          <a
            href="#skills"
            className="text-sm text-black transition-colors duration-300 dark:text-black hover:text-gray-500 dark:hover:text-gray-400 dark:text-white"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="text-sm text-black transition-colors duration-300 dark:text-black hover:text-gray-500 dark:hover:text-gray-400 dark:text-white"
          >
            Contact
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400 dark:text-white">
          © Copyright 2024 aagungwwahyu.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
