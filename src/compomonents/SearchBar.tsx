import React, { FC, FormEvent, useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/actions";

interface Props {}

const SearchBar: FC<Props> = (): JSX.Element => {
  const searchInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchInput && searchInput.current) searchInput.current.focus();
  });

  const searchItem = (): void => {
    const value = searchInput.current?.value;
    if (value !== undefined) dispatch(setSearchTerm(value));
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

export default connect()(SearchBar);
