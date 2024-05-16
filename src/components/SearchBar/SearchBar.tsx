import { useState } from "react";
import css from "./SearchBar.module.css";
import { Toaster } from "react-hot-toast";
import { showError } from "../../supplements/toaster";

interface SearchBarProps {
  onSubmit: (request: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [request, setRequest] = useState<string>("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (request.trim() === "") {
      showError("Oops! Looks like you forgot to fill out the input field.");
      return;
    }
    onSubmit(request);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRequest(evt.target.value);
  };

  return (
    <header className={css.searchBar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={request}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.inputField}
        />
        <Toaster />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

