import { useEffect, useState } from "react";
import css from "../App/App.module.css";
import { searchImagesByRequest } from "../../supplements/api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

 export interface Image {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  id: string;
  length: number;
}

function App() {
  const [images, setImages] = useState<Image[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    async function fetchImagesByQuery() {
      try {
        setIsLoading(true);
        const data = await searchImagesByRequest(query, page);
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prevImages) => [...(prevImages || []), ...data.results]);
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

  const onSetSearchQuery = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const handleMoreImages = async () => {
    setPage((prevPage) => prevPage + 1);
  };

 const openModal = (image: Image) => {
  setModalIsOpen(true);
  setSelectedImage(image);
};

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <SearchBar onSubmit={onSetSearchQuery} />
      {isLoading && <Loader isLoading={true} />}
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
