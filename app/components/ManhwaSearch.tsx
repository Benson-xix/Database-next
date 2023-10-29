"use client"
import { useEffect, useState } from 'react'
import { getManhwaData } from '../services/manhwa.service';
import ManhwaCard from './ManhwaCard';
import SearchBar from './SearchBar';

 const ManhwaSearch = () => {
    const [manhwa,setManhwa] = useState([] as any[]);
    const [allManhwa, setAllManhwa] = useState([] as any[]);

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
        const data = await getManhwaData();
        setManhwa(data);
        setAllManhwa(data);
      };
      fetchData();
    }, []);

    // const handleSearch = async () => {
    //     const data = await getManhwaData(); // Call the service function
    //     setManhwa(data);
      
    //     // if (data) {
    //     //   setManhwa(data); // Set the data in the state
    //     // }
    //   };
    

    // const handleSearch = async (query: string) => {
    //   const data = await getManhwaData(); // Call the service function
    //   let filteredData;
    //   if (query.length === 1) {
    //     filteredData = data.filter(
    //       (item: any) => item.title.charAt(0).toLowerCase() === query.toLowerCase()
    //     );
    //   } else {
    //     filteredData = data.filter((item: any) =>
    //       item.title.toLowerCase().includes(query.toLowerCase())
    //     );
    //   }
    //   setManhwa(filteredData);
    // };
    


  return (
    <div className='flex flex-col justify-center items-center'>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 ">
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
    </div>
  )
}


export default ManhwaSearch;