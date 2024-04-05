"use client";

import React, { useState } from "react";
import { GetWeeklyBoxOffice } from "./api";

const WeeklyData = () => {
  const [date, setDate] = useState("");
  const [weekGb, setWeekGb] = useState(1);
  const [boxOfficeData, setBoxOfficeData] = useState(null);

  const fetchWeekly = async () => {
    try {
      const data = await GetWeeklyBoxOffice(date, weekGb);
      setBoxOfficeData(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <label>Weekly</label>
      <input
        type="text"
        placeholder="YYYMMDD"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={weekGb} onChange={(e) => setWeekGb(e.target.value)}>
        <option value="0">주간 (월~일)</option>
        <option value="1">주말 (금~일)</option>
        <option value="2">주중 (월~목)</option>
      </select>
      <button onClick={fetchWeekly}>확인</button>

      {boxOfficeData && (
        <div>
          {boxOfficeData.boxOfficeResult?.weeklyBoxOfficeList.length === 0 ? (
            <p>검색 결과가 없습니다.</p>
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
                {boxOfficeData.boxOfficeResult?.weeklyBoxOfficeList.map(
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

export default WeeklyData;
