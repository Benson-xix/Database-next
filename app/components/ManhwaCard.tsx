// import { useEffect, useState } from 'react'
import Image from 'next/image';
import LoadingSpinner from './LoadingSpinner ';


interface ManhwaCardProps {
  coverURL: string;
  createdAt: string;
  genre: string[];
  provider: string;
  shortURL: string;
  slug: string;
  sourceURL: string;
  synopsis: string;
  title: string;
  updatedAt: string;

}

const images = [
  "/ACASG.png",
  "/Above the Heavens.jpg",
  "/absolute-necromancer-well-we-have-another-necromancer-manhwa-v0-iky88grr269b1.jpg",
  "/804_EC9E91ED9288EC8381EC84B8_mobile.jpg",
  "/5AbsoluteSwordSense_landingpage_mobile.jpg",
  "/academys-genius-swordmaster-does-anybody-know-where-you-can-v0-ueslgsn12jgb1.jpg",
  "/The_Academy's_Undercover_Professor.jpg",
  "/tall.jpg"
];




const ManhwaCard = ({  
  coverURL,
  createdAt,
  genre,
  provider,
  shortURL,
  slug,
  sourceURL,
  synopsis,
  title,
  updatedAt,
  
}: ManhwaCardProps) => {

  const randomImage = images[Math.floor(Math.random() * images.length)];

  
 
  return (
    <div  className=' bg-white rounded shadow p-4 flex flex-col gap-3 transition hover:scale-105 cursor-pointer '> 
        <Image src={randomImage} className='flex w-[80%] h-[378px]  mx-auto' alt="" priority  width={193} height={278}  /> 

         <p className='text-black text-[14px]'>{createdAt}</p>
         <div >
       <h4 className='text-green-500 text-[18px]'> Genres:</h4>
       {genre && genre.map((g, index) => (
  <span key={index} className="text-gray-500 text-sm">
  {g}
  {index !== genre.length - 1 && ', '}
</span>
))}
      </div> 
      <h3 className='text-sm text-gray-400'>{provider}</h3>
      <p className='text-black text-[14px]'>{shortURL}</p>

      <p className='text-blue-400 text-[14px]'>{slug}</p>

        <p className='text-red-300 text-[12px] md:text-[11px] lg:text-[16px]'>{sourceURL}</p>

        <p className='text-blue-400 text-[12px]'>{synopsis}</p>
     <h2 className='text-2xl text-black font-bold mb-2'>{title}</h2>
      <p className='text-black text-[14px]'>{updatedAt}</p>
    
    </div>
  );
};

export default ManhwaCard;
