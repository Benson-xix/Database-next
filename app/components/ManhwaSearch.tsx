"use client"
import { useEffect, useState } from 'react'
import { getManhwaData } from '../services/manhwa.service';
import ManhwaCard from './ManhwaCard';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner ';

 const ManhwaSearch = () => {
    const [manhwa,setManhwa] = useState([] as any[]);
    const [allManhwa, setAllManhwa] = useState([] as any[]);
    const [isLoading, setIsLoading] = useState(true);


    const handleSearch = async (query: string) => {
      if (query === "") {
        setManhwa(allManhwa);
      } else {
        const filteredData = allManhwa.filter((item: any) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setManhwa(filteredData);
      }
    };
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        const data = await getManhwaData();
        setManhwa(data);
        setAllManhwa(data);
        setIsLoading(false);
      };
      fetchData();
    }, []);

  

  return (
    <div className='flex flex-col justify-center items-center'>
       <SearchBar onSearch={handleSearch} />
       {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
            {manhwa &&
              manhwa.map((manhwa: any, index: number) => (
                <ManhwaCard
                  key={index}
                  coverURL={manhwa.coverurl}
                  createdAt={manhwa.createdAt}
                  genre={manhwa.genre}
                  provider={manhwa.provider}
                  shortURL={manhwa.shortURL}
                  slug={manhwa.slug}
                  sourceURL={manhwa.sourceURL}
                  synopsis={manhwa.synopsis}
                  title={manhwa.title}
                  updatedAt={manhwa.updatedAt}
                />
              ))}
          </div>
        </>
      )}
    </div>
  )
}


export default ManhwaSearch;