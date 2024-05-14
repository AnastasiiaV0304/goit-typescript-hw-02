import { useEffect, useState } from "react";
import css from "../App/App.module.css";
import { searchImagesByRequest } from "../../supplements/api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchImagesByQuery() {
      try {
        setIsLoading(true);
        const data = await searchImagesByRequest(query, page);
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length > 0) {
      fetchImagesByQuery();
    } else {
      setImages(null);
    }
  }, [query, page]);

  const onSetSearchQuery = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const handleMoreImages = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl) => {
    setModalIsOpen(true);
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.wrapper}>
      <SearchBar onSubmit={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} onImageClick={openModal} />}
      {images && <LoadMoreBtn onClick={handleMoreImages} />}
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onRequestClose={closeModal}
      />
    </div>
  );
}

export default App;
