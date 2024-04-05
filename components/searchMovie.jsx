"use client";

import React, { useState } from "react";
import { GetMovieList } from "./api";

const searchMovie = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieList, setMovieList] = useState([]);

  const fetchMovieList = async () => {
    try {
      const data = await GetMovieList(movieTitle);
      setMovieList(data.movieListResult.movieList);
      // console.log(data.movieListResult.movieList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <label>Search</label>
      <input
        type="text"
        placeholder="영화 제목"
        id="title"
        name="title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <button onClick={fetchMovieList}>검색</button>

      {movieList.length > 0 && (
        <div>
          {movieList.length === 0 ? (
            <p>검색 결과가 없습니다.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>영화 제목(kor)</th>
                  <th>영화 제목(eng)</th>
                  <th>영화 유형</th>
                  <th>장르</th>
                  <th>국가</th>
                  <th>개봉일</th>
                  <th>제작 상태</th>
                </tr>
              </thead>
              <tbody>
                {movieList.map((movie, index) => (
                  <tr key={index}>
                    <td>{movie.movieNm}</td>
                    <td>{movie.movieNmEn}</td>
                    <td>{movie.typeNm}</td>
                    <td>{movie.genreAlt}</td>
                    <td>{movie.nationAlt}</td>
                    <td>{movie.openDt}</td>
                    <td>{movie.prdtStatNm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
};

export default searchMovie;
