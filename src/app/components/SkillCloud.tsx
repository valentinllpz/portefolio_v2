"use client";
import React from "react";
import { Cloud, ICloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siTypescript,
  siNextdotjs,
  siJavascript,
  siReact,
  siTailwindcss,
  siFigma,
  siHtml5,
  siCss3,
  siIterm2,
  siDocker,
  siKubernetes,
  siGithub,
  siGit,
  si42,
  SimpleIcon,
} from "simple-icons";

const cloudProps: Omit<ICloud, "children"> = {
  id: "stable-id-for-csr-ssr",
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
  },
};

const getPortfolioIcons = ({ icons }: { icons: SimpleIcon[] }) => {
  const fallbackHex = "#a1a1a6";
  const minContrastRatio = 100;

  return icons.map((icon) => {
    return renderSimpleIcon({
      icon,
      fallbackHex,
      minContrastRatio,
      aProps: {
        href: "#",
        onClick: (e) => {
          e.preventDefault();
        },
      },
    });
  });
};

export const SkillCloud = React.memo(() => {
  const icons = [
    siTypescript,
    siJavascript,
    siNextdotjs,
    siReact,
    siTailwindcss,
    siFigma,
    siHtml5,
    siCss3,
    siDocker,
    siKubernetes,
    siGithub,
    siGit,
    siIterm2,
    si42,
  ];

  return <Cloud {...cloudProps}>{getPortfolioIcons({ icons })}</Cloud>;
});

SkillCloud.displayName = "SkillCloud";
