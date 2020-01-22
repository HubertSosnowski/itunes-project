import React from "react";
import ResultBox from "./ResultBox.js";

export default function Results({
    loading,
    songs,
    onButtonClick,
    numberOfSongs,
    result
}) {
    if (loading) {
        return <p className="loading">Loading...</p>;
    } else if (!result) {
        return <p className="loading">Sorry, no matches found</p>;
    } else if (!numberOfSongs) {
        return <></>;
    }

    return (
        <div className="results">
            <div className="results--found">
                <span>{`Found ${numberOfSongs} songs`}</span>
            </div>
            <div className="results--content">
                {songs.map(item => {
                    return (
                        <ResultBox
                            key={item.trackId}
                            songArtist={item.artistName}
                            songName={item.trackName}
                            songArtwork={item.artworkUrl100}
                        />
                    );
                })}
            </div>
            <div className="results--buttons">
                <button
                    className="results--buttons-btn"
                    onClick={() => onButtonClick("prev")}
                >{`<<prev`}</button>
                <button
                    className="results--buttons-btn"
                    onClick={() => onButtonClick("next")}
                >{`next>>`}</button>
            </div>
        </div>
    );
}
