/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { Button, Drawer, theme, Typography } from "antd";
import { MockData } from "../public/MockData.js";
import IntroCompo from "../components/Introduction/Introduction";
import React from "react";
import Project from "../components/projects/Project";
import Certification from "../components/certifications/Certification.js";
import { CertificationData } from "../constants/index.js";
import Componente from "../components/Skills/Skills.js";
// import { DocumentPdf, getProps } from './document-pdf';

export default function Home({ data }) {
  console.log(data);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rakesh Kharvi - Portofolio</title>
        <meta name="description" content="Rakesh Kharvi - Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>

              <li>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
          <IntroCompo />
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a web developer, I've worked
              for
              <span className="text-teal-500"> MNC corporate companies, </span>
              <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>

          <Project />
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <Certification />
        </section>
      </main>
    </div>
  );
}
