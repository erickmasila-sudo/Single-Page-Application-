function SearchBar({ searchTerm,onSearch })  {
    return(
        <input
        value={searchTerm} onChange={(e) => onSearch(e.target.value)} placeholder="Search Projects"
        className="border border-gray-300 rounded p-2 w-full mb-4"
        ></input>
    )
}  
export default SearchBar