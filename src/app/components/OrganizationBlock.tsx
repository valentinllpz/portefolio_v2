import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="flex flex-col space-y-4">
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
    </div>
  );
};

export default OrganizationBlock;
