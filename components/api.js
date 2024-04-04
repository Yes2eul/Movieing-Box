import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchDailyBoxOffice = async (date) => {
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${date}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
