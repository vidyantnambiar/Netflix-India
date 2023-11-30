import { useEffect } from "react";
import instance from "../instance";
import { useState } from "react";
import "./Row.css"
function Row({ title, fetchurl }) {
    const [allmovies, setAllMovies] = useState();
    const base_url = "https://image.tmdb.org/t/p/original/";
    // console.log(fetchurl);
    const fetchData = async () => {
        const response = await instance.get(fetchurl);

        setAllMovies(response.data.results)
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log(allmovies);
    //console.log("=====all movies=====");
    //console.log(allmovies);
    return (
        <div className="row">
            <h1 style={{ color: "white", fontSize:"20px" }}>{title}</h1>
            <div className="movie-row">
                {
                    allmovies?.map(item => (
                
                   <img className="movie" src={`${base_url}${item.poster_path}`}alt="no_image" />
                    ))
                }
            </div>
        </div>
    )
}
export default Row;