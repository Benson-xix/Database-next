const axios = require('axios');



export const getManhwaData = async () => {
 
  

  const options = {
    method: 'GET',
    url: 'https://manga-scrapper.p.rapidapi.com/webtoons/all',
    params: {provider: 'asura'},
    headers: {
      'X-RapidAPI-Key': 'b654358a35mshb6a671808ce019ep14b777jsne75f9d9cf2a4',
      'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
    }
  };
    try {
      const response = await axios.request(options);
      return response.data; // Return the data from the service
    } catch (error) {
      console.error(error);
      return null;
    }
  };
 //   const options = {
   
  //   method: 'GET',
  // url: 'https://manga-scrapper.p.rapidapi.com/chapters',
  // params: {
  //   provider: 'cosmic',
  //   webtoon: 'eleceed',
  //   page: '1',
  //   limit: '20'
  // },
  // headers: {
  //   'X-RapidAPI-Key': 'b654358a35mshb6a671808ce019ep14b777jsne75f9d9cf2a4',
  //   'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
  // }

  //   };
   //   method: 'GET',
    //   url: 'https://manga-scrapper.p.rapidapi.com/webtoons',
    //   params : {
    //     provider: 'surya',
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': 'b654358a35mshb6a671808ce019ep14b777jsne75f9d9cf2a4',
    //     'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
    //   }
    //   params: {
    //     provider: 'surya',
    //     page: '1',
    //     limit: '20',
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': 'b654358a35mshb6a671808ce019ep14b777jsne75f9d9cf2a4',
    //     'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com',
    //   },


// export const searchManhwa = async (query: string) => {
//     try {
//         const response = await axios.request(options);
//         if (response.data && response.data.results) {
//             return response.data.results;
//         } else {
//             console.error("Couldn't get the data");
//         }
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// };


// const options = {
//   method: 'GET',
//   url: 'https://manga-scrapper.p.rapidapi.com/providers',
//   headers: {
//     'X-RapidAPI-Key': 'b654358a35mshb6a671808ce019ep14b777jsne75f9d9cf2a4',
//     'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


// const Api_key = "b654358a35mshb6a671808ce019ep14b777jsne75f9d9cf2a4";
// const Api_Base_Url = "https://manga-scrapper.p.rapidapi.com/providers";
// const Api_Host = "manga-scrapper.p.rapidapi.com";

// const client = axios.create({
//     baseUrl: Api_Base_Url,
//     host: Api_Host,
//     params: {api_key: Api_key}
   
// })



// const options = {
//   method: 'GET',
//   url: 'https://manga-scrapper.p.rapidapi.com/webtoons',
//   params: {
//     provider: 'surya',
//     page: '1',
//     limit: '10'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'b654358a35mshb6a671808ce019ep14b777jsne75f9d9cf2a4',
//     'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


// export const serachManhwa = async(query: string) => {
//     try{
//         const response = await options.get("/search/manhwa", {
//             params: {query,},
//         });
//         if(response.data && response.data.results) {
//             return response.data.results;

//         } else {
//             console.error("Couldnot get the data");
//         }
//     } catch(error) {
//         console.error(error);
//         return[];
//     }
// }


