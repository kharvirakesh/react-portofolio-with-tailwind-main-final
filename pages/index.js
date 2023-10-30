/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/dentamitra.png";
import web2 from "../public/makethisblue.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { Button, Drawer, theme, Typography } from "antd";
import { MockData } from "../public/MockData.js";
import IntroCompo from "../components/Introduction";
// import resume from '../public/RakeshResume.pdf'

export default function Home({ data }) {
  console.log(data);
  const [darkMode, setDarkMode] = useState(false);
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const { Title } = Typography;
  const containerStyle = {
    position: "relative",
    height: "auto",
    // padding: 48,
    overflow: "hidden",
    textAlign: "center",
    background: token.colorFillAlter,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawer2 = () => {
    setOpen2(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onClose2 = () => {
    setOpen2(false);
  };

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
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  // href={require('../public/RakeshResume.pdf')}
                  target="_blank"
                  download="Rakesh's Resume"
                  rel="noreferrer"
                >
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
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p> */}
          </div>

          <h3 className="text-3xl py-2 dark:text-white ">
            Educational Details
          </h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
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
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div
              className="basis-1/3 flex-1 cursor-pointer"
              style={containerStyle}
            >
              <Image
                onClick={showDrawer}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              <Drawer
                title="DentaMitra - WebApp"
                placement="right"
                closable={false}
                onClose={onClose}
                open={open}
                getContainer={false}
              >
                <p>
                  Built an web application led by by Bizydales.net using ReactJs
                  which helps end user to Book an appointment through online.
                  Denta Mitra brings a Dentist to your home and offers 24x7
                  video consultation.
                </p>
                <p>
                  DentaMitra provides tips on dental health, reminders, SMS on
                  daily dental hygiene routine, check teeth movements, calculate
                  sweet score, see nearby dentists through Google map And also I
                  have integrated Razorpay payment gateway for the mobile
                  application in the release{" "}
                </p>

                <div className="p-5">
                  <Title level={3}>Technology Used</Title>
                  <Button className="mx-1">React</Button>
                  <Button className="mx-1">Node</Button>
                  <Button className="mx-1">AntD</Button>
                </div>

                <div>
                  <a
                    href="https://dentamitra.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              </Drawer>
            </div>
            {/* BlueOcean */}
            <div
              className="basis-1/3 flex-1 cursor-pointer"
              style={containerStyle}
            >
              <Image
                onClick={showDrawer2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              <Drawer
                title="Makethisblue - Ecommerce WebApp"
                placement="right"
                closable={false}
                onClose={onClose2}
                open={open2}
                getContainer={false}
              >
                <p>
                  worked on Ecommerce project Blue-Ocean that allows you to buy
                  and sell lab equipments, glassware, plasticware products or
                  services online. where I was responsible for UI design and
                  development of the web application (Next Js) for the
                  enterprise product in the business. And also I have been
                  closely involved in requirements discussions with the team
                </p>

                <div className="p-5">
                  <Title level={3}>Technology Used</Title>
                  <Button className="mx-1">Next JS</Button>
                  <Button className="mx-1">Node</Button>
                  <Button className="mx-1">AntD</Button>
                </div>

                <div>
                  <a
                    href="https://makethisblue.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              </Drawer>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>{" "}
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web5}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web6}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const data = MockData

//   // Pass data to the page via props
//   return {
//     props: {
//       data: data || []
//     }
//   }
// }
