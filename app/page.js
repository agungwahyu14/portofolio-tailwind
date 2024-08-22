import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiFlutter,
  SiMysql,
  SiGitlab,
  SiGithub,
  SiLaravel,
} from "react-icons/si";

export default function Home() {
  return (
    <main>
      <section className="bg-white py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10 md:pl-20 ">
            <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
              Hi, I am Agung Wahyu,
            </h1>
            <p className="text-lg mb-6 text-black dark:text-white">
              I'm a dedicated IT student at ITB Stikom Bali with a passion for
              learning and applying new technologies. Feel free to explore my
              projects, which showcase my skills and growth as a developer, and
              don't hesitate to get in touch!
            </p>
            <a
              href="#"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Download Resume
            </a>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <div className="rounded-lg overflow-hidden shadow-xl m-auto h-[500px] md:h-[400px]">
              <img
                src="images/profile.jpg"
                alt="Foto Anda"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="bg-gray-100 dark:bg-[#030711] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl mb-8 bg-gray-400 text-white rounded-full inline-block py-2 px-6">
            Education
          </h2>
          <p className="text-lg mb-8 text-gray-700 mx-auto sm:text-sm w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] dark: text-white">
            Explore my academic background and the institutions where I have
            acquired my knowledge and skills. This section highlights my
            educational journey and the qualifications I have earned.
          </p>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="images/education/smp.jpeg"
                alt="Placeholder"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                SMP 9 Denpasar
              </h3>
              <p className="text-gray-600 dark:text-white">
                Junior High School
              </p>
              <p className="text-gray-500 dark:text-white">2018 - 2020</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="images/education/sma.jpeg"
                alt="Placeholder"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:ext-white">
                SMK 1 Denpasar
              </h3>
              <p className="text-gray-600 dark:text-white">
                Vocational High School
              </p>
              <p className="text-gray-500 dark:text-white">2021 - 2023</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="images/education/stikom.jpg"
                alt="Placeholder"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                ITB Stikom Bali
              </h3>
              <p className="text-gray-600 dark:text-white">
                Bachelor of Information Technology
              </p>
              <p className="text-gray-500 dark:text-white">2023 - Present</p>
            </div>
            {/* Add more education items as needed */}
          </div>
        </div>
      </section>
      {/* Works Section */}
      <section id="works" className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h2 className="text-xl mb-4 bg-gray-400 text-white rounded-full inline-block py-2 px-6">
            Works
          </h2>
          <p className="text-lg mb-8 text-gray-700 text-center mx-auto sm:text-sm w-full sm:w-[600px] md:w-[800px] lg:w-[1000px]">
            Discover some of the projects I have worked on, showcasing my skills
            and expertise in various domains. This section highlights key
            projects and their impact, demonstrating the practical application
            of my knowledge.
          </p>
          <div className="w-full flex flex-col gap-8 items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-[300px] md:w-[500px] lg:w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-4 dark:bg-[#1f2938]">
              <img
                src="images/projects/project-one.jpeg"
                alt="Project Image"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center pl-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Project Name
                </h3>
                <p className="text-gray-600 mb-4 dark:text-white">
                  Short project description
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline dark:text-white"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-[300px] md:w-[500px] lg:w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-4 dark:bg-[#1f2938]">
              <img
                src="images/projects/project-two.png"
                alt="Project Image"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center pl-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Project Name
                </h3>
                <p className="text-gray-600 mb-4 dark:text-white">
                  Short project description
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline dark:text-white"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-[300px] md:w-[500px] lg:w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-4 dark:bg-[#1f2938]">
              <img
                src="images/projects/project-three.png"
                alt="Project Image"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center pl-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Project Name
                </h3>
                <p className="text-gray-600 mb-4 dark:text-white">
                  Short project description
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline dark:text-white"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-20 dark:bg-[#030711]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl mb-4 bg-gray-400 text-white rounded-full inline-block py-2 px-6">
            Skills
          </h2>
          <p className="text-lg mb-8 text-gray-700 text-center mx-auto sm:text-sm w-full sm:w-[600px] md:w-[800px] lg:w-[1000px]">
            Explore the diverse skill set I have developed through my
            experiences and projects. From web development to mobile app
            creation, my expertise spans various technologies and tools.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            <div className=" p-6  flex items-center justify-center">
              <FaHtml5 className="text-red-600 text-6xl" />
            </div>
            <div className=" p-6  flex items-center justify-center">
              <FaCss3Alt className="text-blue-600 text-6xl" />
            </div>
            <div className=" p-6  flex items-center justify-center">
              <FaJsSquare className="text-yellow-500 text-6xl" />
            </div>
            <div className=" p-6  flex items-center justify-center">
              <FaReact className="text-blue-400 text-6xl" />
            </div>
            <div className=" p-6  flex items-center justify-center">
              <FaNodeJs className="text-green-600 text-6xl" />
            </div>
            <div className=" p-6  flex items-center justify-center">
              <SiFlutter className="text-blue-400 text-6xl" />
            </div>
            <div className=" p-6  flex items-center justify-center">
              <SiMysql className="text-blue-500 text-6xl" />
            </div>
            <div className=" p-6  flex items-center justify-center">
              <SiGitlab className="text-orange-600 text-6xl" />
            </div>
            <div className=" p-6  flex items-center justify-center">
              <SiGithub className="text-black text-6xl" />
            </div>
            <div className=" p-6  flex items-center justify-center">
              <SiLaravel className="text-red-600 text-6xl" />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl mb-4 bg-gray-400 text-white rounded-full inline-block py-2 px-6">
            Contact
          </h2>
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                wahyubrahmantha05@gmail.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Office
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                (+62) 08123261344
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
