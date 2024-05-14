import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className={css.galleryContainer}>
      <ul className={css.galleryList}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
