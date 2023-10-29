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
      return response.data; 
    } catch (error) {
      console.error(error);
      return null;
    }
  };



