
import {ChangeEvent, FormEvent, useState} from "react"


interface SearchBarProps {
    onSearch: (query: string) => void;
}




const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState("");


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
      };
   

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

  
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 w-screen max-w-3xl">
           <input
                type="text"
                value={query}
                onChange={handleChange}
                className="border border-gray-300 rounded-l py-2 px-4 w-full focus:outline-none focus:border-blue-500 text-black"
                placeholder="Enter your search query"
            />
            <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-r hover:bg-blue-600 focus:outline-none">
                Search
            </button>
        </form>
  );
};

export default SearchBar