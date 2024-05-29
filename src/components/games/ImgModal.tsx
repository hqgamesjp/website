import { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

interface ImgModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imgSrc: string;
  handlePreviousClick: any;
  handleNextClick: any;
}

const ImgModal: FC<ImgModalProps> = ({
  isOpen: isOpenProp,
  closeModal,
  imgSrc,
  handlePreviousClick,
  handleNextClick,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(isOpenProp);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  if (!isClient) {
    return null;
  }

  // モーダルの外側をクリックして閉じる処理
  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen min-w-full">
            <div
              className="bg-black bg-opacity-60 fixed inset-0"
              onClick={closeModal}
            ></div>
            <div className="relative bg-white inline-block">
              <button
                onClick={closeModal}
                className="absolute -top-6 sm:-top-6 right-6 sm:-right-6 transform translate-x-1/2 -translate-y-1/2 p-2"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-white w-8 h-8"
                />
              </button>
              <button
                onClick={handlePreviousClick}
                className="absolute top-1/2 left-1 sm:-left-12 transform -translate-y-1/2 p-2"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-white w-8 h-8"
                />
              </button>
              <button
                onClick={handleNextClick}
                className="absolute top-1/2 right-1 sm:-right-12 transform -translate-y-1/2 p-2"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white w-8 h-8"
                />
              </button>
              <img src={imgSrc} alt="Modal" className="sm:w-vw80" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ImgModal;
