import { createContext, useState } from "react";

export const SearchQueryContext = createContext<{
  searchQuery: string;
  handleSearchQueryChange: (val: string) => void;
}>(null);

interface Props {
  children: any;
}

const SearchQueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQueryChange = (value:string) => setSearchQuery(value);
  return (
    <SearchQueryContext.Provider value={{ searchQuery, handleSearchQueryChange }}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export default SearchQueryProvider;
