import React, { useState } from "react";
import Image from "next/image";
import { Button, Drawer, Typography } from "antd";
import { ProjectData } from "../../constants";

const { Title } = Typography;

const Project = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = (index) => {
    setOpen(index);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {ProjectData.map((project, index) => (
          <div
            key={index}
            className="basis-1/3 flex-1 cursor-pointer"
            style={{
              position: "relative",
              height: "auto",
              overflow: "hidden",
              textAlign: "center",
              background: project.backgroundColor,
              border: `1px solid ${project.borderColor}`,
              borderRadius: project.borderRadius,
            }}
          >
            <Image
              onClick={() => showDrawer(index)}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={project.image}
            />
            <Drawer
              title={project.title}
              placement="right"
              closable={false}
              onClose={onClose}
              open={open === index}
              getContainer={false}
            >
              <p>{project.description}</p>
              <div className="p-5">
                <Title level={3}>Technology Used</Title>
                {project.technologies.map((tech, i) => (
                  <Button key={i} className="mx-1">
                    {tech}
                  </Button>
                ))}
              </div>
              <div>
                <a href={project.website} target="_blank" rel="noreferrer">
                  Visit Website
                </a>
              </div>
            </Drawer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
