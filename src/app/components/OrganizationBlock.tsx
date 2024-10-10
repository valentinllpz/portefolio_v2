import React from "react";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import fs from "fs";
import HorizontallyScrollableGallery from "./HorizontallyScrollableGallery";

interface OrganizationBlockProps {
  iconPath: string;
  name: string;
  link?: string;
  role: string;
  startDate: string;
  endDate: string;
  children: React.ReactNode;
}

const OrganizationBlock: React.FC<OrganizationBlockProps> = ({
  iconPath,
  name,
  link,
  role,
  startDate,
  endDate,
  children,
}) => {
  const imagesDirectory = path.join(process.cwd(), `public/images/${name}`);
  const imagesPaths: string[] = [];

  try {
    const filenames = fs.readdirSync(imagesDirectory);
    filenames.forEach((filename) => {
      if (filename.endsWith(".png")) {
        imagesPaths.push(`/images/${name}/${filename}`);
      }
    });
  } catch (error) {}

  return (
    <div className="flex flex-col space-y-4 bg-light/[0.08] rounded-lg p-4 ">
      <div className="flex flex-row space-x-4">
        <div className="min-w-[50px] min-h-[50px] relative">
          <Image src={iconPath} alt={name} width={50} height={50} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold uppercase">
            {role} @{" "}
            {link ? (
              <Link href={link} className="underline">
                {name}
              </Link>
            ) : (
              name
            )}
          </span>
          <span className="uppercase opacity-70">
            {startDate} - {endDate}
          </span>
        </div>
      </div>
      {children}
      <HorizontallyScrollableGallery imagesPaths={imagesPaths} alt={name} />
    </div>
  );
};

export default OrganizationBlock;
