"use client";

import React, { useState } from "react";
import { fetchDailyBoxOffice } from "@/components/api";

const dailyBoxOffice = () => {
  const [date, setDate] = useState("");
  const [boxOfficeData, setBoxOfficeData] = useState(null);

  const fetchBoxOffice = async () => {
    try {
      const data = await fetchDailyBoxOffice(date);
      setBoxOfficeData(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="YYYMMDD"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={fetchBoxOffice}>검색</button>

      {boxOfficeData && (
        <div>
          <h2>박스오피스 순위</h2>
          {boxOfficeData.boxOfficeResult.dailyBoxOfficeList.length === 0 ? (
            <p>해당 날짜에 데이터가 없습니다.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  {Object.keys(
                    boxOfficeData.boxOfficeResult.dailyBoxOfficeList[0]
                  ).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {boxOfficeData.boxOfficeResult.dailyBoxOfficeList.map(
                  (movie, index) => (
                    <tr key={index}>
                      {Object.values(movie).map((value, index) => (
                        <td key={index}>{value}</td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default dailyBoxOffice;
