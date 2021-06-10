import React, { FC, FormEvent, useEffect, useRef } from "react";

interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: FC<Props> = ({ setSearchTerm }): JSX.Element => {
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInput && searchInput.current) searchInput.current.focus();
  });

  const searchItem = (): void => {
    const value = searchInput.current?.value;
    if (value !== undefined) setSearchTerm(value);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={(e: FormEvent) => e.preventDefault()}>
        <label htmlFor="search-input">Search: </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          ref={searchInput}
          onChange={searchItem}
        />
      </form>
    </div>
  );
};

export default SearchBar;
