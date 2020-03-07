/**
 * Movie crwaling API
 * API: https://45w5vsjd0b.execute-api.ap-northeast-2.amazonaws.com/v1/movieCrawling
 * KEY: AWS Key need
 * Query: {
   theater: 'megaBox' | 'cgv' | 'lotte',
   request: 'region' | 'theaters' | 'timetable' | 'box-office' (Only CGV),
   regionIndex: number (Only reqeust is 'theaters')
   theaterLink: string (Only request is 'timetable')
 }
 */

const axios = require('axios');

const BASE_URL = 'https://45w5vsjd0b.execute-api.ap-northeast-2.amazonaws.com/v1/movieCrawling';

// This api need key
axios.defaults.headers.common['x-api-key'] = '';

const getRegion = async (theaterType) => {
  try {
    const res = await axios.get(`${BASE_URL}?request=region&theater=${theaterType}`);
    return res.data;
  } catch (error) {
    const { response } = error;
    console.log('Get region error message.', response.data.message);
  }
}

const getTimeTable = async (theaterType, theaterInfo) => {
  try {
    const res = await axios.get(`${BASE_URL}?request=timetable&theater=${theaterType}&theaterLink=${encodeURI(theaterInfo)}`);
    return res.data;
  } catch (error) {
    const { response } = error;
    console.log('Get timeTable error message.', response.data.message);
  }
};

module.exports.getRegion = getRegion;
module.exports.getTimeTable = getTimeTable;