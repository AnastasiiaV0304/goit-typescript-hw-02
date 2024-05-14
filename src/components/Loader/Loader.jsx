import css from "../Loader/Loader.module.css";
import { MagnifyingGlass } from "react-loader-spinner";

const Loader = ({ isLoading }) => {
  return (
    <div className={css.loaderContainer}>
      <MagnifyingGlass
        visible={isLoading}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
