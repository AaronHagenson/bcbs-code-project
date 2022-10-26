import { MyComponent } from "ahagenson-bcbs-react-components";
import { useState } from "react";
import { mockResponseData } from "../data";
import "./MediaList.css"

const MediaList = () => {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async () => {
        setIsLoading(true);
        try {     
            await fetch("http://localhost:4000/media", { 
                method: 'POST', 
                mode: 'no-cors',    
                headers: {
                'Content-Type': 'application/json'
                },
            });

            // The response is being returned without data, so I'm hardcoding
            // the results of the graphQL query and setting them to the state
            // after the api call is complete.
            setMovieList(mockResponseData);
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
                    <li key={movie.id}>{movie.title.english}</li>
                ))}
            </ul> 
        )
    }

    const renderLoadingState = () => {
        return <h3>Loading. . .</h3>
    }

    return (
    <div className="media-list-container">
        <MyComponent />
        {movieList.length < 1 && <button onClick={fetchMovies}>Get Movies</button>}
        {isLoading ? renderLoadingState() : renderMovieList()}
     
    </div>
    )
}

export default MediaList;