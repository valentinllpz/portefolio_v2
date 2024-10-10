"use client";
import React from "react";
import Image from "next/image";
import HorizontallyScrollableDiv from "./HorizontallyScrollableDiv";
import FullScreenGalleryModal from "./FullScreenGalleryModal";

interface HorizontallyScrollableGalleryProps {
  imagesPaths: string[];
  alt: string;
}

const HorizontallyScrollableGallery: React.FC<
  HorizontallyScrollableGalleryProps
> = ({ imagesPaths, alt }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="max-w-[85vw] md:max-w-[55vw] overflow-hidden">
        <HorizontallyScrollableDiv>
          <div className="flex flex-row space-x-4">
            {imagesPaths.length > 0 &&
              imagesPaths.map((imagePath, index) => (
                <div
                  key={imagePath}
                  className="relative w-[400px] h-[200px] cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <Image
                    src={imagePath}
                    alt={`${alt} ${index + 1}`}
                    fill
                    objectFit="cover"
                  />
                </div>
              ))}
          </div>
        </HorizontallyScrollableDiv>
      </div>
      {imagesPaths.length > 0 && (
        <FullScreenGalleryModal
          imagesPaths={imagesPaths}
          showModal={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default HorizontallyScrollableGallery;
