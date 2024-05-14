import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={css.imageContainer}>
      <img
        onClick={onClick}
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
