import React, { useState, useEffect } from "react";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";
import { iconSlugs } from "../../constants";

const Skills = () => {
  const [iconSize, seticonSize] = useState(0);

  const tagCanvasOptions = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
  };

  const iconTags = iconSlugs?.map((slug) => ({
    id: slug,
    simpleIcon: allIcons?.Get(slug),
  }));

  useEffect(() => {
    setTimeout(() => {
      seticonSize(50);
    }, 100);
  }, [iconSize]);

  return (
    <>
      <h3 className="text-3xl dark:text-white">Skills and Projects</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconCloud
          key={v4()}
          id={"icon"}
          minContrastRatio={1}
          iconSize={iconSize}
          backgroundHexColor={"#fff"}
          fallbackHexColor={"#000"}
          tags={iconTags}
          tagCanvasOptions={tagCanvasOptions}
        />
      </div>
    </>
  );
};

export default Skills;
