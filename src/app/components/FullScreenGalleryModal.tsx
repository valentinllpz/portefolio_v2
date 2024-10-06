import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { ProjectDetails } from "@/types/types";
import { Dialog, Transition } from "@headlessui/react";
import Cross from "@/icons/Cross";
import { v4 as uuidv4 } from "uuid";
import React from "react";

interface FullScreenGalleryModalProps {
  project: ProjectDetails;
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
  project,
  showModal,
  onClose,
}) => {
  const images = [];
  let exitButtonRef = React.useRef(null);

  useEscapeKey(() => {
    onClose();
  });

  for (let i = 0; i < project.imagesCount; i++) {
    images.push(
      <SplideSlide
        key={uuidv4()}
        className="relative flex shrink-0 h-[100dvh] w-[100dvw]"
      >
        <Image
          key={uuidv4()}
          src={project.imagesPath + i + ".jpg"}
          fill
          className="object-contain transition opacity-0 ease-in-out delay-100 duration-300"
          onLoadingComplete={(image) =>
            image.classList.remove("opacity-0")
          }
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={`${project.name} ${i}`}
          priority
          quality={60}
        />
      </SplideSlide>
    );
  }

  return (
    <Transition.Root show={showModal} appear>
      <Dialog
        className="fixed top-0 left-0 h-[100dvh] w-[100dvw] z-30"
        initialFocus={exitButtonRef}
        onClose={() => {}}
      >
        <Transition.Child
          enter="transition duration-200 ease-in-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-150 ease-in-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="fixed h-full w-full bg-black" />
          <button
            ref={exitButtonRef}
            className="fixed outline-none top-4 right-4 z-30 opacity-50 border-0 transition duration-200 ease-in-out hover:opacity-100 hover:cursor-pointer"
            aria-label="Close modal"
            onClick={() => onClose()}
          >
            <Cross height={42} width={42} />
          </button>
          <Splide
            className="h-full w-full"
            options={{ rewind: true, lazyLoad: true }}
            aria-label={project.name}
          >
            {images}
          </Splide>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default FullScreenGalleryModal;
