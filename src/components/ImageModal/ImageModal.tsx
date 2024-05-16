import Modal from "react-modal";
import { Image } from "../App/App";
import { FC } from "react";

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ image, isOpen, onRequestClose }) => {
  if (!image) {
    return null;
  }

  return (
    <Modal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "none",
          overflow: "visible",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      appElement={document.getElementById("root") as HTMLElement}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
