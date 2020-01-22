import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header.js";
import Results from "./components/Results/Results.js";
import Footer from "./components/Footer/Footer.js";
import "./main.scss";

const App = () => {
    const [songName, setSongName] = useState("");
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [numberOfSongs, setNumberOfSongs] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage] = useState(9);
    const [result, setResult] = useState(true);

    const getSongs = async () => {
        setLoading(true);

        const response = await axios.get(
            `https://itunes.apple.com/search?term=${songName}&media=music&entity=song&limit=100`
        );

        if (response.data.resultCount) {
            setResult(true);
            setSongs(response.data.results);
            setNumberOfSongs(response.data.results.length);
        } else {
            setResult(false);
        }
        setLoading(false);
    };

    const indexOfLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOfLastSong - songsPerPage;
    const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

    const handleSongChange = event => {
        setSongName(event.target.value);
    };

    const onSongChange = event => {
        event.preventDefault();
        getSongs();
    };

    const onButtonClick = button => {
        if (
            button === "next" &&
            Math.ceil(numberOfSongs / songsPerPage) > currentPage
        ) {
            setCurrentPage(currentPage + 1);
        } else if (button === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="App">
            <Header
                onSongChange={onSongChange}
                handleSongChange={handleSongChange}
            />
            <Results
                onButtonClick={onButtonClick}
                songs={currentSongs}
                loading={loading}
                numberOfSongs={numberOfSongs}
                result={result}
            />
            <Footer />
        </div>
    );
};

export default App;
