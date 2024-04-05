"use client";

import React, { useState } from "react";
import { GetDailyBoxOffice } from "./api";

const dailyData = () => {
  const [date, setDate] = useState("");
  const [boxOfficeData, setBoxOfficeData] = useState(null);

  const fetchDaily = async () => {
    try {
      const data = await GetDailyBoxOffice(date);
      setBoxOfficeData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="YYYMMDD"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={fetchDaily}>검색</button>

      {boxOfficeData && (
        <div>
          {boxOfficeData.boxOfficeResult?.dailyBoxOfficeList.length === 0 ? (
            <p>해당 날짜에 데이터가 없습니다.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>순위</th>
                  <th>영화</th>
                  <th>개봉일</th>
                  <th>관객 수</th>
                  <th>누적 관객 수</th>
                </tr>
              </thead>
              <tbody>
                {boxOfficeData.boxOfficeResult?.dailyBoxOfficeList.map(
                  (movie, index) => (
                    <tr key={index}>
                      <td>{movie.rank}</td>
                      <td>{movie.movieNm}</td>
                      <td>{movie.openDt}</td>
                      <td>{movie.audiCnt}</td>
                      <td>{movie.audiAcc}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
};

export default dailyData;
