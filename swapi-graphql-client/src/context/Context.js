import React, { createContext, useState } from "react";
export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchContext.Provider value={{ isSearching, setIsSearching }}>
      {props.children}
    </SearchContext.Provider>
  );
};
