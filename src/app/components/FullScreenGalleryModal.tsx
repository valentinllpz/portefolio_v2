"use client";
import Image from "next/image";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import React from "react";
import Cross from "../icons/Cross";
import { Carousel } from "nuka-carousel";

interface FullScreenGalleryModalProps {
  imagesPaths: string[];
  showModal: boolean;
  onClose: () => void;
}

function useEscapeKey(callback: () => void) {
  React.useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        callback();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [callback]);
}

const FullScreenGalleryModal: React.FC<FullScreenGalleryModalProps> = ({
  imagesPaths,
  showModal,
  onClose,
}) => {
  const images = [];
  const exitButtonRef = React.useRef(null);

  useEscapeKey(() => {
    onClose();
  });
  for (let i = 0; i < imagesPaths.length; i++) {
    images.push(
      <div
        key={`slide-${i}`}
        className="relative flex shrink-0 h-[100dvh] w-[100dvw]"
      >
        <Image
          src={imagesPaths[i]}
          fill
          className="transition opacity-0 ease-in-out delay-100 duration-300"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          alt=""
          priority
          quality={60}
          objectFit="contain"
        />
      </div>
    );
  }

  return (
    <Transition show={showModal}>
      <Dialog
        className="fixed top-0 left-0 h-[100dvh] w-[100dvw] z-30"
        initialFocus={exitButtonRef}
        onClose={() => {}}
      >
        <TransitionChild
          enter="transition duration-200 ease-in-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-150 ease-in-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="fixed h-full w-full bg-dark">
            <button
              ref={exitButtonRef}
              className="fixed bg-light/20 rounded-full p-2 top-4 right-4 z-30 border-0 transition duration-200 ease-in-out hover:bg-light/25 hover:cursor-pointer"
              aria-label="Close modal"
              onClick={() => onClose()}
            >
              <Cross height={20} width={20} color="#FFFFFF"/>
            </button>
            <Carousel showArrows="always" showDots swiping wrapMode="wrap">
              {images}
            </Carousel>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

export default FullScreenGalleryModal;
