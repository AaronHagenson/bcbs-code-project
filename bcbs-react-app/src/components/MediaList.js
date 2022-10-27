import { MovieCard } from "ahagenson-bcbs-react-components";
import { useState } from "react";
import "./MediaList.css"

const MediaList = () => {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchMovies = async () => {
        setIsLoading(true);
        try {     
            const response = await fetch("http://localhost:4000/movies", { method: 'GET' });
            const responseJson = await response.json();

            setMovieList(responseJson.Page.media);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    }

    const renderMovieList = () => {
        return (
            <ul>
                {movieList.map(movie => (
                    <li key={movie.id}><MovieCard name={movie.title?.english ?? 'N/A'} description={movie.description ?? ''} image={movie.coverImage?.large ?? ''}/></li>
                ))}
            </ul> 
        )
    }

    const renderLoadingState = () => {
        return <h3 className="loading-state">Loading. . .</h3>
    }

    return (
        <div className="media-list-container">
        <h1>BCBS Interview Project</h1>
            {(!movieList.length && !isLoading) && <button onClick={fetchMovies}>Get Movies</button>}
            {isLoading ? renderLoadingState() : renderMovieList()}    
        </div>
    )
}

export default MediaList;