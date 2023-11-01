import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import { AboutMe } from "../../constants";

const IntroCompo = () => {
  if (!AboutMe || AboutMe.length === 0) {
    return null; // Error handling: If 'AboutMe' is empty or undefined, don't render anything.
  }

  const { name, role, description, githubURL, linkedInURL, avatar } =
    AboutMe[0];

  return (
    <div>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          {name || "Name Not Available"}{" "}
          {/* Error handling: Provide a default value if 'name' is not available */}
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          {role || "Role Not Available"}{" "}
          {/* Error handling: Provide a default value if 'role' is not available */}
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          {description || "Description Not Available"}{" "}
          {/* Error handling: Provide a default value if 'description' is not available */}
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <Link href={githubURL}>
            <a target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </Link>
          <Link href={linkedInURL}>
            <a target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
          </Link>
        </div>
        {avatar && (
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={avatar} layout="fill" objectFit="cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroCompo;
