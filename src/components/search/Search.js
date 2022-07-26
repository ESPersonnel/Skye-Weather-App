import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (value) => {
        setSearch(value);
        onSearchChange(value);
    }

    return (
        <AsyncPaginate 
        placeholder="Search for city"
        debounceTimeout={300}
        value={search}
        onChange={handleOnChange}
        />
    );
}

export default Search;